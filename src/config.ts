export default {
    //SCENE FACING: "NORTH"/"EAST"/"SOUTH"/"WEST"
    sceneOrientation: "SOUTH",
    
    logo: {
        bottom: {
            //image should be 512px square
            imgSrc: "images/logo.png",
            position: new Vector3(6.96862, 5.72577, 7.34845)
        },
        top: {
            name: "BRAND\nNAME",
            fontSize: 6,
            color: new Color3(0.1, 0.1, 0.1),
            position: new Vector3(0, 5.84663, 6.39477)
        }
    },
    socialMedia: [
        {
            name: "HOMEPAGE",
            model: "models/social_media/homepage.glb",
            link: "https://www.decentraland.org",
            position: new Vector3(1.5, 1.3, -5.35)
        },
        {
            name: "DISCORD",
            model: "models/social_media/discord.glb",
            link: "https://www.discord.org",
            position: new Vector3(0.5, 1.3, -5.35)
        },
        {
            name: "TWITTER",
            model: "models/social_media/twitter.glb",
            link: "https://www.twitter.com",
            position: new Vector3(-0.5, 1.3, -5.35)
        },
        {
            name: "TELEGRAM",
            model: "models/social_media/telegram.glb",
            link: "https://www.telegram.org",
            position: new Vector3(-1.5, 1.3, -5.35)
        }
    ],
    videoScreen: {
        src: "https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875",
        width: 1280,
        height: 720
    },
    wearable: [
        {
            name: "Razor Blade Jacket",
            model: "models/suit.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(4.2, 1, 5.1),
            // scale: new Vector3(0,0,0),
            rotation: Quaternion.Euler(0, 90, 0)
        },


        // {
        //     name: "Cars",
        //     model: "models/LowPolyCars.glb",
        //     link: "https://market.decentraland.org/",
        //     position: new Vector3(4, 0, 6),
        //     rotation: Quaternion.Euler(0, 0, 0)
        // },

        {
            name: "Shirt",
            model: "models/Dress1.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(-4.2, 1, 5.1),
            // scale:new Vector3(10,10,10),
            rotation: Quaternion.Euler(0, 0, 0)
        },
        {
            name: "Aviator",
            model: "models/wearables/3.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(5.1, -1, -3.3),
            rotation: Quaternion.Euler(0, -90, 0)
        },
        {
            name: "CornFlakes", 
            model: "models/CornFlakes.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(-5.1, -1, -3.3),
            rotation: Quaternion.Euler(0, 90, 0)
        },
        {
            name: "iphone",
            model: "models/Iphone.glb",
            UIImage:"images/004.png",
            // link: "https://market.decentraland.org/",
            position: new Vector3(0, 1, 0.7),
            rotation: Quaternion.Euler(0, 0, 0)
        },
        {
            name: "Macintosh",
            model: "models/Macintosh.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(1, 0.7, -0.7),
            rotation: Quaternion.Euler(0, 45, 0)
        },
        {
            name: "PlayStation",
            model: "models/PlayStation.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(-1, 0.7, -0.7),
            rotation: Quaternion.Euler(0, -45, 0)
        },
    ]
}