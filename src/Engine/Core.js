import VertexBuffer from './VertexBuffer'

export let gl = null

const Core = {
	initializeWebGL: htmlCanvasID => {
		const canvas = document.getElementById(htmlCanvasID)
		gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
		if (gl === null) return document.write("<b>WebGL is not supported !</b>")
		Core.gl = gl
		VertexBuffer.initialize(gl)
	},
	clearCanvas: color => {
		gl.clearColor(...color)
		gl.clear(gl.COLOR_BUFFER_BIT)
	}
}

export default Core