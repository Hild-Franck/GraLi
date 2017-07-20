"use strict"

let gSimpleShader = null
let gShaderVertexPositionAttribute = null

const loadAndCompileShader = (id, shaderType) => {
	const shaderText = document.getElementById(id)
	const shaderSource = shaderText.firstChild.textContent
	const compiledShader = gGL.createShader(shaderType)

	gGL.shaderSource(compiledShader, shaderSource)
	gGL.compileShader(compiledShader)

	if (!gGL.getShaderParameter(compiledShader, gGL.COMPILE_STATUS)) {
		alert("A shader compiling error occured: " +
			gGL.getShaderInfoLog(compiledShader))
	}
	return compiledShader
}

const initSimpleShader = (vertexShaderID, fragmentShaderID) => {
	const vertexShader = loadAndCompileShader(vertexShaderID, gGL.VERTEX_SHADER)
	const fragmentShader = loadAndCompileShader(fragmentShaderID, gGL.FRAGMENT_SHADER)

	gSimpleShader = gGL.createProgram()
	// On attache les shaders au programme
	gGL.attachShader(gSimpleShader, vertexShader)
	gGL.attachShader(gSimpleShader, fragmentShader)
	gGL.linkProgram(gSimpleShader)

	if (!gGL.getProgramParameter(gSimpleShader, gGL.LINK_STATUS))
		alert("Error linking shader")
	gShaderVertexPositionAttribute = gGL.getAttribLocation(gSimpleShader, "aSquareVertexPosition")

	gGL.bindBuffer(gGL.ARRAY_BUFFER, gSquareVertexBuffer)

	gGL.vertexAttribPointer(gShaderVertexPositionAttribute,
		3,
		gGL.FLOAT,
		false,
		0,
		0)
}