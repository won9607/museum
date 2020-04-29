
$(window).scroll(function(){
    var scrollPos = $(window).scrollTop()

    // 스크롤 위치 100 이상/이하 > header white클래스 추가/제거
    if (scrollPos>100){
        $('#header').addClass('white')
    }else{
        $('#header').removeClass('white')
    }
})

// 미술대전 이전 수상작 둘러보기 버튼
var contest = 0
$('.contest .info_txt .view_btn').click(function(e){
    e.preventDefault()

    contest = !contest
    if(contest){
        $(this).addClass('active')
        $(this).text('이전 수상작 닫기')
        $('.contest_art').slideDown()
    }else{
        $(this).removeClass('active')
        $(this).text('이전 수상작 둘러보기')
        $('.contest_art').slideUp()
    }
})
// 미술대전 이전 수상작 둘러보기 필터
$(".art_category li").click(function(){
    $('.art_category li').removeClass('on')
    $(this).addClass('on')

    var filterValue = $(this).attr("data-filter")
    $grid.isotope({ filter: filterValue })
})


board()



// 퀵메뉴
$('#qlink a, #m_gnb a, #gnb a').click(function(){
    var link = $(this).attr('href')
    var linkTop = $(link).offset().top
    $('html').animate({scrollTop:linkTop-110}, 700)
    $('#m_gnb').slideUp()
})


// 모바일 메뉴 버튼 클릭시 모바일 메뉴 slideToggle
$('.m_menu_btn').click(function(){
    $(this).toggleClass('change')
    $('#m_gnb').slideToggle()
})

$(window).resize(function(){
    var w = $(window).width()
    // window 길이가 990보다 클 때 모바일 메뉴 닫기
    if(w>990){
        $('#m_gnb').slideUp()
        $('.m_menu_btn').removeClass('change')
    }

    board()
})

// 하단 게시판
function board(){
    var w = $(window).width()
    if(w<=990){
        $('.board .tabs ul li').first().find('a').addClass('active')
        $('.board .tab_cont>ul>li').hide()
        $('.board .tab_cont>ul>li').first().show()

        var listH = $('.board .tab_cont>ul>li').height()
        $('.board .tab_cont>ul').height(listH+40)

        $('.board .tabs ul li').click(function(){
            var idx = $(this).index()
            $('.board .tabs ul li a').removeClass('active')
            $(this).find('a').addClass('active')
            $('.board .tab_cont>ul>li').hide()
            $('.board .tab_cont>ul>li').eq(idx).show()
            return false
        })
    }else {
        $('.board .tabs ul li a').removeClass('active')
        $('.board .tab_cont>ul>li').show()
    }
}


//worldArt slide

var mLeft = 0
var timer = setInterval(move, 20)

$('.worldArt_slide_box').mouseenter(function(){
    clearInterval(timer)
})

$('.worldArt_slide_box').mouseleave(function(){
        timer = setInterval(move, 20)
})

function move(){
    mLeft -= 1
    $('.worldArt_slide_box').css({'marginLeft':mLeft})

    if(mLeft == -201){
        $('.worldArt_slide_box .worldArt-slide').first().appendTo('.worldArt_slide_box')
    }else if(mLeft <= -400){
        mLeft = -200
    }
}



