export function pro(){



const canvas1 = new UICanvas()

const atlas1 = new Texture('images/images1.png')

const uiContainer1 = new UIContainerRect(canvas1)
uiContainer1.width = '100%'
uiContainer1.height = '100%'
uiContainer1.visible = false

const bg1 = new UIImage(uiContainer1, atlas1)
bg1.sourceHeight = 800
bg1.sourceWidth = 1000
bg1.sourceLeft = 0
bg1.sourceTop = 0
bg1.width = 500
bg1.height = 400

const buy = new UIImage(uiContainer1, atlas1)
buy.sourceHeight = 149
buy.sourceWidth = 379
buy.sourceLeft = 0
buy.sourceTop = 801
buy.width = 100
buy.positionX = 90
buy.positionY = -20
buy.onClick = new OnClick(() => {
  uiContainer1.visible = false
  openExternalURL('https://docs.decentraland.org/development-guide/external-links/')
})
return uiContainer1
}