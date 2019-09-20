    const tl = new TimelineMax({paused: true});

export default {
    tl,
    setTimeline() {
        tl.from(" .bg", 1, {scale:0, ease:Power1.easeinOut}, "in1")
            .from(" .bg", 1, {rotation:90, ease:Power1.easeinOut}, "in1")
            .staggerFrom(" .text span", 1, {y:-50, opacity:0, ease:Elastic.easeOut}, 0.06)
            .addLabel("out1", "+=1")
            .staggerTo(" .text span", 1, {opacity:0, y:50, ease:Power1.easein}, -0.06, "out")
            .to(" .bg", 1, {scale:0, rotation:-90, ease:Power1.easeinOut})
    }
}