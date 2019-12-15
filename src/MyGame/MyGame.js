import Engine from '../Engine'
import Renderable from '../Engine/Renderable'
import SimpleShader from '../Engine/SimpleShader'

const createGame = htmlCanvasID => {
	Engine.Core.initializeWebGL(htmlCanvasID)

	const shader = SimpleShader.create(
		"src/GLSLShaders/SimpleVS.vert",
		"src/GLSLShaders/SimpleFS.frag"
	)

	const whiteSq = Renderable.create(shader)
	whiteSq.color = [ 1, 1, 1, 1 ]
	const redSq = Renderable.create(shader)
	redSq.color = [ 1, 0, 0, 1 ]

	Engine.Core.clearCanvas([ 0, 0.8, 0, 1 ])

	whiteSq.draw()
	redSq.draw()
}

createGame('GLCanvas')