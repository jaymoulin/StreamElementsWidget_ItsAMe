let vips = {
    "{user1}": {
        'played': false,
        'sound': "{userSound1}",
        'volume': "{userVolume1}",
    },
    "{user2}": {
        'played': false,
        'sound': "{userSound2}",
        'volume': "{userVolume2}",
    },
    "{user3}": {
        'played': false,
        'sound': "{userSound3}",
        'volume': "{userVolume3}",
    },
    "{user4}": {
        'played': false,
        'sound': "{userSound4}",
        'volume': "{userVolume4}",
    },
    "{user5}": {
        'played': false,
        'sound': "{userSound5}",
        'volume': "{userVolume5}",
    },
    "{user6}": {
        'played': false,
        'sound': "{userSound6}",
        'volume': "{userVolume6}",
    },
    "{user7}": {
        'played': false,
        'sound': "{userSound7}",
        'volume': "{userVolume7}",
    },
    "{user8}": {
        'played': false,
        'sound': "{userSound8}",
        'volume': "{userVolume8}",
    },
    "{user9}": {
        'played': false,
        'sound': "{userSound9}",
        'volume': "{userVolume9}",
    },
    "{user10}": {
        'played': false,
        'sound': "{userSound10}",
        'volume': "{userVolume10}",
    },
    "{user11}": {
        'played': false,
        'sound': "{userSound11}",
        'volume': "{userVolume11}",
    },
    "{user12}": {
        'played': false,
        'sound': "{userSound12}",
        'volume': "{userVolume12}",
    },
    "{user13}": {
        'played': false,
        'sound': "{userSound13}",
        'volume': "{userVolume13}",
    },
    "{user14}": {
        'played': false,
        'sound': "{userSound14}",
        'volume': "{userVolume14}",
    },
    "{user15}": {
        'played': false,
        'sound': "{userSound15}",
        'volume': "{userVolume15}",
    },
    "{user16}": {
        'played': false,
        'sound': "{userSound16}",
        'volume': "{userVolume16}",
    },
    "{user17}": {
        'played': false,
        'sound': "{userSound17}",
        'volume': "{userVolume17}",
    },
    "{user18}": {
        'played': false,
        'sound': "{userSound18}",
        'volume': "{userVolume18}",
    },
    "{user19}": {
        'played': false,
        'sound': "{userSound19}",
        'volume': "{userVolume19}",
    },
    "{user20}": {
        'played': false,
        'sound': "{userSound20}",
        'volume': "{userVolume20}",
    },
    "{user21}": {
        'played': false,
        'sound': "{userSound21}",
        'volume': "{userVolume21}",
    },
    "{user22}": {
        'played': false,
        'sound': "{userSound22}",
        'volume': "{userVolume22}",
    },
    "{user23}": {
        'played': false,
        'sound': "{userSound23}",
        'volume': "{userVolume23}",
    },
    "{user24}": {
        'played': false,
        'sound': "{userSound24}",
        'volume': "{userVolume24}",
    },
    "{user25}": {
        'played': false,
        'sound': "{userSound25}",
        'volume': "{userVolume25}",
    },
    "{user26}": {
        'played': false,
        'sound': "{userSound26}",
        'volume': "{userVolume26}",
    },
    "{user27}": {
        'played': false,
        'sound': "{userSound27}",
        'volume': "{userVolume27}",
    },
    "{user28}": {
        'played': false,
        'sound': "{userSound28}",
        'volume': "{userVolume28}",
    },
    "{user29}": {
        'played': false,
        'sound': "{userSound29}",
        'volume': "{userVolume29}",
    },
    "{user30}": {
        'played': false,
        'sound': "{userSound30}",
        'volume': "{userVolume30}",
    },
};

window.addEventListener('onWidgetLoad', function (obj) {
    channelName = obj.detail.channel.username.toLowerCase()
})

window.addEventListener('onEventReceived', function (obj) {
    if (obj.detail.listener !== "message") return;
    let data = obj.detail.event.data;
    if (data["displayName"] == "StreamElements") return;

    let user = data["nick"];
    if (vips[user].played !== false) return;
    console.log("It's a me : audio", vips[user].sound);
    try {
        let audio = new Audio();
        audio.src = vips[user].sound;
        audio.volume = parseFloat(vips[user].volume) / 100;
        audio.play();
        new Promise((res) => {
            audio.onended = res;
            audio.onerror = (e) => {
                console.log(e);
                res()
            };
        })
            .then(_ => vips[user].played = true);
    } catch (e) {
        console.log("Audio playback error:", e);
    }
});
