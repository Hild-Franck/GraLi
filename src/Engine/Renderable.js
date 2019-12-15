import { gl } from './Core'

const create = shader => {
	const renderable = {
		shader,
		color: [1,1,1,1],
		draw: () => {
			shader.activateShader(renderable.color)
			gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
		}
	}
	return renderable
}

export default { create }