import { gl } from './Core'
import VertexBuffer from './VertexBuffer'

const openShaderFile = path => {
	const xmlReq = new XMLHttpRequest()
	xmlReq.open("GET", path, false)
	try {
		xmlReq.send()
		if (xmlReq.responseText == null) throw new Error()
	} catch (e) {
		return alert('Failed to load shader: ' + path)
	}
	return xmlReq.responseText
}

const loadAndCompileShader = gl => (filePath, shaderType) => {
	const shaderSource = openShaderFile((filePath))
	const compiledShader = gl.createShader(shaderType)
	gl.shaderSource(compiledShader, shaderSource)
	gl.compileShader(compiledShader)

	if (!gl.getShaderParameter(compiledShader, gl.COMPILE_STATUS)) {
		alert(
			'A shader compiling error occured: '
			+ gl.getShaderInfoLog(compiledShader))
	}
	return compiledShader
}

const linkShaders = gl => (vertexShader, fragmentShader) => {
	const compiledShader = gl.createProgram()
	gl.attachShader(compiledShader, vertexShader)
	gl.attachShader(compiledShader, fragmentShader)
	gl.linkProgram(compiledShader)

	if (!gl.getProgramParameter(compiledShader, gl.LINK_STATUS))
		return alert("Error linking shader")

	return compiledShader
}

const create = (vertexShaderID, fragmentShaderID) => {
	const vertexShader = loadAndCompileShader(gl)(vertexShaderID, gl.VERTEX_SHADER)
	const fragmentShader = loadAndCompileShader(gl)(fragmentShaderID, gl.FRAGMENT_SHADER)
	const compiledShader = linkShaders(gl)(vertexShader, fragmentShader)
	const shaderVertexPositionAttribute = gl.getAttribLocation(compiledShader, "aSquareVertexPosition")
	
	gl.bindBuffer(gl.ARRAY_BUFFER, VertexBuffer.squareVertexBuffer)
	gl.vertexAttribPointer(shaderVertexPositionAttribute, 3, gl.FLOAT, false, 0, 0)
	
	const pixelColorLocation = gl.getUniformLocation(compiledShader, "uPixelColor")

	const activateShader = pixelColor => {
		gl.useProgram(compiledShader)
		gl.enableVertexAttribArray(shaderVertexPositionAttribute)
		gl.uniform4fv(pixelColorLocation, pixelColor)
	}

	return {
		compiledShader,
		shaderVertexPositionAttribute,
		pixelColorLocation,
		activateShader
	}
}

export default { create }
