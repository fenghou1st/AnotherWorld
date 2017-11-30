// Requirements ////////////////////////////////////////////////////////////////
import React, {Component} from 'react';
import {render} from 'react-dom';

import './game.scss';

// Definitions /////////////////////////////////////////////////////////////////

// Classes /////////////////////////////////////////////////////////////////////

/**
 * Main component of the game
 */
export default class Game extends Component {
  /**
   * @param {?Object} props
   */
  constructor(props) {
    super(props);

    this.canvas = null;
    this.gl = null;

    this.cubeVerticesBuffer = null;
    this.cubeVerticesTextureCoordBuffer = null;
    this.cubeVerticesIndexBuffer = null;
    this.cubeRotation = 0.0;
    this.lastTime = 0;

    this.cubeImage = null;
    this.cubeTexture = null;

    this.mvMatrixStack = [];
    this.mvMatrix = null;
    this.shaderProgram = null;
    this.vertexPositionAttribute = null;
    this.vertexNormalAttribute = null;
    this.textureCoordAttribute = null;
    this.perspectiveMatrix = null;



    this.initData();

    this.animationFrame = null;
    this.initialized = false;
    this.initEvents();

    this.initCanvas = this.initCanvas.bind(this);
  }

  /**
   * @param {Object} canvas
   */
  initCanvas(canvas) {
    this.canvas = canvas;
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
  }

  /**
   * Initialize WebGL
   */
  initWebGL() {
    try {
      this.gl = this.canvas.getContext('webgl')
          || this.canvas.getContext('experimental-webgl');
    } catch (e) {
      console.log(e);
    }

    if (!this.gl) {
      throw new Error('Unable to initialize WebGL. ' +
          'Your browser may not support it.');
    }

    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    this.gl.clearDepth(1.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.depthFunc(this.gl.LEQUAL);

    console.log('viewport: ' + this.gl.getParameter(this.gl.VIEWPORT));

    this.initShaders();

    this.initBuffers();

    this.initTextures();
  }

  /**
   * Initialize shaders
   */
  initShaders() {
    const fragmentShader = getShader(this.gl, 'shader-fs');
    const vertexShader = getShader(this.gl, 'shader-vs');

    this.shaderProgram = this.gl.createProgram();
    this.gl.attachShader(this.shaderProgram, vertexShader);
    this.gl.attachShader(this.shaderProgram, fragmentShader);
    this.gl.linkProgram(this.shaderProgram);

    if (!this.gl.getProgramParameter(this.shaderProgram, this.gl.LINK_STATUS)) {
      throw new Error('Unable to initialize the shader program.');
    }

    this.gl.useProgram(this.shaderProgram);

    this.vertexPositionAttribute =
        this.gl.getAttribLocation(this.shaderProgram, 'aVertexPosition');
    this.gl.enableVertexAttribArray(this.vertexPositionAttribute);

    this.textureCoordAttribute =
        this.gl.getAttribLocation(this.shaderProgram, 'aTextureCoord');
    this.gl.enableVertexAttribArray(this.textureCoordAttribute);

    this.vertexNormalAttribute =
        this.gl.getAttribLocation(this.shaderProgram, 'aVertexNormal');
    this.gl.enableVertexAttribArray(this.vertexNormalAttribute);
  }

  /**
   * Initialize buffers
   */
  initBuffers() {
    const vertices = [
      // Front face
      -1.0, -1.0, 1.0,
      1.0, -1.0, 1.0,
      1.0, 1.0, 1.0,
      -1.0, 1.0, 1.0,

      // Back face
      -1.0, -1.0, -1.0,
      -1.0, 1.0, -1.0,
      1.0, 1.0, -1.0,
      1.0, -1.0, -1.0,

      // Top face
      -1.0, 1.0, -1.0,
      -1.0, 1.0, 1.0,
      1.0, 1.0, 1.0,
      1.0, 1.0, -1.0,

      // Bottom face
      -1.0, -1.0, -1.0,
      1.0, -1.0, -1.0,
      1.0, -1.0, 1.0,
      -1.0, -1.0, 1.0,

      // Right face
      1.0, -1.0, -1.0,
      1.0, 1.0, -1.0,
      1.0, 1.0, 1.0,
      1.0, -1.0, 1.0,

      // Left face
      -1.0, -1.0, -1.0,
      -1.0, -1.0, 1.0,
      -1.0, 1.0, 1.0,
      -1.0, 1.0, -1.0,
    ];

    this.cubeVerticesBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.cubeVerticesBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices),
        this.gl.STATIC_DRAW);

    //
    const vertexNormals = [
      // Front
      0.0, 0.0, 1.0,
      0.0, 0.0, 1.0,
      0.0, 0.0, 1.0,
      0.0, 0.0, 1.0,

      // Back
      0.0, 0.0, -1.0,
      0.0, 0.0, -1.0,
      0.0, 0.0, -1.0,
      0.0, 0.0, -1.0,

      // Top
      0.0, 1.0, 0.0,
      0.0, 1.0, 0.0,
      0.0, 1.0, 0.0,
      0.0, 1.0, 0.0,

      // Bottom
      0.0, -1.0, 0.0,
      0.0, -1.0, 0.0,
      0.0, -1.0, 0.0,
      0.0, -1.0, 0.0,

      // Right
      1.0, 0.0, 0.0,
      1.0, 0.0, 0.0,
      1.0, 0.0, 0.0,
      1.0, 0.0, 0.0,

      // Left
      -1.0, 0.0, 0.0,
      -1.0, 0.0, 0.0,
      -1.0, 0.0, 0.0,
      -1.0, 0.0, 0.0,
    ];

    this.cubeVerticesNormalBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.cubeVerticesNormalBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertexNormals),
        this.gl.STATIC_DRAW);

    //
    const textureCoordinates = [
      // Front
      0.0, 0.0,
      1.0, 0.0,
      1.0, 1.0,
      0.0, 1.0,
      // Back
      0.0, 0.0,
      1.0, 0.0,
      1.0, 1.0,
      0.0, 1.0,
      // Top
      0.0, 0.0,
      1.0, 0.0,
      1.0, 1.0,
      0.0, 1.0,
      // Bottom
      0.0, 0.0,
      1.0, 0.0,
      1.0, 1.0,
      0.0, 1.0,
      // Right
      0.0, 0.0,
      1.0, 0.0,
      1.0, 1.0,
      0.0, 1.0,
      // Left
      0.0, 0.0,
      1.0, 0.0,
      1.0, 1.0,
      0.0, 1.0,
    ];

    this.cubeVerticesTextureCoordBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER,
        this.cubeVerticesTextureCoordBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER,
        new Float32Array(textureCoordinates), this.gl.STATIC_DRAW);

    //
    const cubeVertexIndices = [
      0, 1, 2, 0, 2, 3, // front
      4, 5, 6, 4, 6, 7, // back
      8, 9, 10, 8, 10, 11, // top
      12, 13, 14, 12, 14, 15, // bottom
      16, 17, 18, 16, 18, 19, // right
      20, 21, 22, 20, 22, 23, // left
    ];

    this.cubeVerticesIndexBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,
        this.cubeVerticesIndexBuffer);
    this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(cubeVertexIndices), this.gl.STATIC_DRAW);
  }

  /**
   * Initialize textures
   */
  initTextures() {
    this.cubeTexture = this.gl.createTexture();
    this.cubeImage = new Image();

    const self = this;
    this.cubeImage.onload = function() {
      self.handleTextureLoaded(self.cubeImage, self.cubeTexture);
    };

    this.cubeImage.src = 'images/bricks.png';
  }

  /**
   * @return {*}
   */
  render() {
    return (
        <canvas ref={(canvas) => this.initCanvas(canvas)} />
    );
  }

  /**
   * Initialization after DOM created
   */
  componentDidMount() {
    this.initWebGL();
  }
}

// Functions ///////////////////////////////////////////////////////////////////



Game_.prototype =
    {












      handleTextureLoaded: function(image, texture)
      {
        console.log('handleTextureLoaded, image = ' + image);

        this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, image);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_NEAREST);
        this.gl.generateMipmap(this.gl.TEXTURE_2D);
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);

        this.initialized = true;
      },


      initData: function()
      {
        ;
      },


      initEvents: function()
      {
        var self = this;

        window.addEventListener('resize', function()
        {
          self.calcDimensions();
        });
      },


      start: function()
      {
        this.drawScene();
      },


      pause: function()
      {
        window.cancelAnimationFrame(this.animationFrame);
      },


      drawScene: function()
      {
        if (!this.initialized)
        {
          this.showInitializing();
          this.requestNextDraw();
          return;
        }

        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        this.perspectiveMatrix = makePerspective(45, this.canvas.width / this.canvas.height, 0.1, 100.0);

        this.loadIdentity();
        this.mvTranslate([0.0, 0.0, -6.0]);

        //
        this.mvPushMatrix();
        this.mvRotate(this.cubeRotation, [1, 0, 1]);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.cubeVerticesBuffer);
        this.gl.vertexAttribPointer(this.vertexPositionAttribute, 3, this.gl.FLOAT, false, 0, 0);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.cubeVerticesTextureCoordBuffer);
        this.gl.vertexAttribPointer(this.textureCoordAttribute, 2, this.gl.FLOAT, false, 0, 0);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.cubeVerticesNormalBuffer);
        this.gl.vertexAttribPointer(this.vertexNormalAttribute, 3, this.gl.FLOAT, false, 0, 0);

        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.cubeTexture);
        this.gl.uniform1i(this.gl.getUniformLocation(this.shaderProgram, 'uSampler'), 0);

        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.cubeVerticesIndexBuffer);
        this.setMatrixUniforms();
        this.gl.drawElements(this.gl.TRIANGLES, 36, this.gl.UNSIGNED_SHORT, 0);

        this.mvPopMatrix();

        //
        var currentTime = (new Date()).getTime();
        if (this.lastTime)
        {
          var delta = currentTime - this.lastTime;

          this.cubeRotation += (30 * delta) / 1000.0;
        }

        this.lastTime = currentTime;

        this.requestNextDraw();
      },


      showInitializing: function()
      {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
      },


      requestNextDraw: function()
      {
        var self = this;
        this.animationFrame = window.requestAnimationFrame(function() {self.drawScene();});
      },


      calcDimensions: function()
      {
        this.canvas.top = this.canvas.clientTop;
        this.canvas.left = this.canvas.clientLeft;
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;

        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);

        console.log('viewport: ' + this.gl.getParameter(this.gl.VIEWPORT));
      },


      loadIdentity: function()
      {
        this.mvMatrix = Matrix.I(4);
      },


      multMatrix: function(m)
      {
        this.mvMatrix = this.mvMatrix.x(m);
      },


      mvTranslate: function(v)
      {
        this.multMatrix(Matrix.Translation($V([v[0], v[1], v[2]])).ensure4x4());
      },


      setMatrixUniforms: function()
      {
        var pUniform = this.gl.getUniformLocation(this.shaderProgram, 'uPMatrix');
        this.gl.uniformMatrix4fv(pUniform, false, new Float32Array(this.perspectiveMatrix.flatten()));

        var mvUniform = this.gl.getUniformLocation(this.shaderProgram, 'uMVMatrix');
        this.gl.uniformMatrix4fv(mvUniform, false, new Float32Array(this.mvMatrix.flatten()));

        var normalMatrix = this.mvMatrix.inverse();
        normalMatrix = normalMatrix.transpose();
        var nUniform = this.gl.getUniformLocation(this.shaderProgram, 'uNormalMatrix');
        this.gl.uniformMatrix4fv(nUniform, false, new Float32Array(normalMatrix.flatten()));
      },


      mvPushMatrix: function(m)
      {
        if (m)
        {
          this.mvMatrixStack.push(m.dup());
          this.mvMatrix = m.dup();
        }
        else
          this.mvMatrixStack.push(this.mvMatrix.dup());
      },


      mvPopMatrix: function()
      {
        if (!this.mvMatrixStack.length) throw new Error('Can\'t pop from an empty matrix stack.');

        this.mvMatrix = this.mvMatrixStack.pop();
        return this.mvMatrix;
      },


      mvRotate: function(angle, v)
      {
        var inRadians = angle * Math.PI / 180.0;

        var m = Matrix.Rotation(inRadians, $V([v[0], v[1], v[2]])).ensure4x4();
        this.multMatrix(m);
      }
    };
