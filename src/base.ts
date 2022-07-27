export function base(){

const base = new Entity()
engine.addEntity(base)
base.addComponent(new GLTFShape('models/sandbaseC.glb'))
base.addComponent(
  new Transform({
    position: new Vector3(34,0.2,50),
    
  })
)
}
