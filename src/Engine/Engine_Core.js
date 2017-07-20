"use strict";

const gEngine = {}

gEngine.Core = (function() {
	let mGL = null

	const initializeWebGL = function(htmlCanvasID) {
		const canvas = document.getElementById(htmlCanvasID)
		mGL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
		if (mGL === null) {
			document.write("<br><b>WebGL is not supported !</b>")
			return;
		}
		gEngine.VertexBuffer.initialize()
	}

	const clearCanvas = function(color) {
		mGL.clearColor(color[0], color[1], color[2], color[3])
		mGL.clear(mGL.COLOR_BUFFER_BIT)
	}

	const getGL = () => mGL
	return { getGL, initializeWebGL, clearCanvas }
}())