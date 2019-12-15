const verticesOfSquare = [
	0.5,  0.5, 0.0,
	-0.5,  0.5, 0.0,
	0.5, -0.5, 0.0,
	-0.5, -0.5, 0.0
]

let squareVertexBuffer = null

const VertexBuffer = {
	initialize: gl => {
		squareVertexBuffer = gl.createBuffer()
		VertexBuffer.squareVertexBuffer = squareVertexBuffer

		gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexBuffer)
		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array(verticesOfSquare),
			gl.STATIC_DRAW
		)
	}
}

export default VertexBuffer