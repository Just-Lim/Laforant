$(function(){

    $('.next1').click(function(){
        let currentImage = $('.current1')
        let nextImage = currentImage.next()

        if(nextImage.length != 0){

            currentImage.removeClass('current1').css('z-index',-100)
            nextImage.addClass('current1').css('z-index', 100)
        }else{
            let firstImage = currentImage.prevAll().last()
            currentImage.removeClass('current1').css('z-index',-100)
            firstImage.addClass('current1').css('z-index', 100)
        }

    })

    $('.prev1').click(function(){
        let currentImage = $('.current1')
        let prevImage = currentImage.prev()

        if(prevImage.length !=0){
            currentImage.removeClass('current1').css('z-index',-100)
            prevImage.addClass('current1').css('z-index', 100)
        }else{
            let lastImage = currentImage.nextAll().last()
            currentImage.removeClass('current1').css('z-index',-100)
            lastImage.addClass('current1').css('z-index', 100)
        }
    })

    $('.next2').click(function(){
        let currentImage = $('.current2')
        let nextImage = currentImage.next()

        if(nextImage.length != 0){

            currentImage.removeClass('current2').css('z-index',-100)
            nextImage.addClass('current2').css('z-index', 100)
        }else{
            let firstImage = currentImage.prevAll().last()
            currentImage.removeClass('current2').css('z-index',-100)
            firstImage.addClass('current2').css('z-index', 100)
        }

    })

    $('.prev2').click(function(){
        let currentImage = $('.current2')
        let prevImage = currentImage.prev()

        if(prevImage.length !=0){
            currentImage.removeClass('current2').css('z-index',-100)
            prevImage.addClass('current2').css('z-index', 100)
        }else{
            let lastImage = currentImage.nextAll().last()
            currentImage.removeClass('current2').css('z-index',-100)
            lastImage.addClass('current2').css('z-index', 100)
        }
    })
})