"use strict";

gEngine.VertexBuffer = (function() {
	const verticeOfSquare = [
		0.5,  0.5, 0.0,
	 -0.5,  0.5, 0.0,
	  0.5, -0.5, 0.0,
	 -0.5, -0.5, 0.0
	]
	let mSquareVertexBuffer = null
	
	const getGLVertexRef = () => mSquareVertexBuffer
	
	const initialize = function() {
		const gl = gEngine.Core.getGL()
		
		mSquareVertexBuffer = gl.createBuffer()

		gl.bindBuffer(gl.ARRAY_BUFFER, mSquareVertexBuffer)
		gl.bufferdata(gl.ARRAY_BUFFER, new Float32Array(verticeOfSquare), gl.STATIC_DRAW)
	}

	return { initialize, getGLVertexRef }
}())