(()=>{

    const setLayout = function() {

        if(window.innerHeight < 500)
        {
            sectionSet[0].height = 3000;
            sectionSet[1].height = 3000;
            sectionSet[2].height = 3000;
            sectionSet[0].objs.container.style.height = `${sectionSet[0].height}px`
            sectionSet[1].objs.container.style.height = `${sectionSet[1].height}px`
            sectionSet[2].objs.container.style.height = `${sectionSet[2].height}px`
        }

        else
        {
            for(let i = 0; i < sectionSet.length; i++)
            {
                sectionSet[i].height = window.innerHeight * sectionSet[i].multiple;
                sectionSet[i].objs.container.style.height = `${sectionSet[i].height}px`;
            }
        }

    }

    const getCurrentSection = function() {
        
        let curSection = 0;

        if(yOffset <= sectionSet[0].height)
        {
            curSection = 0;
        }

        else if((yOffset > sectionSet[0].height) && (yOffset <= sectionSet[0].height + sectionSet[1].height))
        {
            curSection = 1;
        }

        else
        {
            curSection = 2;
        }

        return curSection;
    }

    const getPrevSectionHeight = function() {

        let prevHeight = 0;

        for(let i = 0; i < curSection; i++)
        {
            prevHeight = prevHeight + sectionSet[i].height;
        }

        return prevHeight;
    }

    const setBodyID = function(curSection) {

        document.body.setAttribute('id',`show-section${curSection}`);
    } 
    
    const setLocalnavMenu = function() {
        if(yOffset <= 44)
        {
            document.body.classList.remove('local-nav-sticky');
        }
        else
        {
            document.body.classList.add('local-nav-sticky');
        }
    }

    const setCanvas = function() {

        let imageElement;

        for(let i = 0; i < sectionSet[1].vals.imageCount; i++)
        {
            imageElement = new Image();
            imageElement.src = `./image/wash${i}.jpg`;
            sectionSet[1].objs.images.push(imageElement);
        }

            imageElement.addEventListener('load', ()=>{
            sectionSet[1].objs.context.drawImage(sectionSet[1].objs.images[0], 0, 0);
        });
    }

    const getCssValue = function(values) {

        let height = sectionSet[curSection].height;
        let start = values[2].start * height;
        let end = values[2].end * height;
        let length = end - start;
        let rate = 0;
        let retVal = 0;

        if((sectionYOffset >= start) && (sectionYOffset <= end))
        {
            rate = (sectionYOffset - start) / length;
            retVal = ((values[1] - values[0]) * rate) + values[0];
        }

        else if(sectionYOffset < start)
        {
            retVal = values[0];
        }

        else if(sectionYOffset > end)
        {
            retVal = values[1];
        }

        return retVal;
    }

    const playAnimation = function() {
        
        let transValue = 0;
        let opacityValue = 0;
        let scrollRate = sectionYOffset / sectionSet[curSection].height
        let imageSeq = 0;

        switch(curSection)
        {   
            case 0 :

                break;

            case 1 :

            console.log(scrollY)
                sectionSet[1].objs.messageA.style.opacity = 0;
                sectionSet[1].objs.messageB.style.opacity = 0;
                sectionSet[1].objs.messageC.style.opacity = 0;
                sectionSet[1].objs.messageD.style.opacity = 0;

                if(scrollRate < 0.145)
                {   
                    opacityValue = getCssValue(sectionSet[1].vals.messageA_opacity_in);
                    sectionSet[1].objs.messageA.style.opacity = opacityValue;

                    transValue = getCssValue(sectionSet[1].vals.messageA_translate1);
                    sectionSet[1].objs.messageA.style.transform = `translateY(${transValue}px)`
                }
                
                else if((scrollRate >= 0.145) && (scrollRate < 0.245))
                {
                    opacityValue = getCssValue(sectionSet[1].vals.messageA_opacity_out);
                    sectionSet[1].objs.messageA.style.opacity = opacityValue;

                    transValue = getCssValue(sectionSet[1].vals.messageA_translate2)
                    sectionSet[1].objs.messageA.style.transform = `translateY(${transValue}px)`
                }

                else if((scrollRate >= 0.245) && (scrollRate < 0.345))
                {
                    opacityValue = getCssValue(sectionSet[1].vals.messageB_opacity_in);
                    sectionSet[1].objs.messageB.style.opacity = opacityValue;

                    transValue = getCssValue(sectionSet[1].vals.messageB_translate1)
                    sectionSet[1].objs.messageB.style.transform = `translateY(${transValue}px)`
                }

                else if((scrollRate >= 0.345) && (scrollRate < 0.445))
                {
                    opacityValue = getCssValue(sectionSet[1].vals.messageB_opacity_out);
                    sectionSet[1].objs.messageB.style.opacity = opacityValue;

                    transValue = getCssValue(sectionSet[1].vals.messageB_translate2)
                    sectionSet[1].objs.messageB.style.transform = `translateY(${transValue}px)`
                }

                else if((scrollRate >= 0.445) && (scrollRate < 0.545))
                {
                    opacityValue = getCssValue(sectionSet[1].vals.messageC_opacity_in);
                    sectionSet[1].objs.messageC.style.opacity = opacityValue;

                    transValue = getCssValue(sectionSet[1].vals.messageC_translate1)
                    sectionSet[1].objs.messageC.style.transform = `translateY(${transValue}px)`
                }

                else if((scrollRate >= 0.545) && (scrollRate < 0.645))
                {
                    opacityValue = getCssValue(sectionSet[1].vals.messageC_opacity_out);
                    sectionSet[1].objs.messageC.style.opacity = opacityValue;

                    transValue = getCssValue(sectionSet[1].vals.messageC_translate2)
                    sectionSet[1].objs.messageC.style.transform = `translateY(${transValue}px)`
                }

                else if((scrollRate >= 0.645) && (scrollRate < 0.745))
                {
                    opacityValue = getCssValue(sectionSet[1].vals.messageD_opacity_in);
                    sectionSet[1].objs.messageD.style.opacity = opacityValue;

                    transValue = getCssValue(sectionSet[1].vals.messageD_translate1)
                    sectionSet[1].objs.messageD.style.transform = `translateY(${transValue}px)`
                }

                else if((scrollRate >= 0.745) && (scrollRate < 0.845))
                {
                    opacityValue = getCssValue(sectionSet[1].vals.messageD_opacity_out);
                    sectionSet[1].objs.messageD.style.opacity = opacityValue;

                    transValue = getCssValue(sectionSet[1].vals.messageD_translate2)
                    sectionSet[1].objs.messageD.style.transform = `translateY(${transValue}px)`
                }

                else
                {
                    sectionSet[1].objs.messageA.style.opacity = 0;
                    sectionSet[1].objs.messageB.style.opacity = 0;
                    sectionSet[1].objs.messageC.style.opacity = 0;
                    sectionSet[1].objs.messageD.style.opacity = 0;
                }
                
                if((scrollRate >= 0.795) && (scrollRate <= 0.96))
                {   
                    sectionSet[1].objs.canvas.style.opacity = getCssValue(sectionSet[1].vals.canvas_opacity_out);
                }

                imageSeq = Math.floor(getCssValue(sectionSet[1].vals.canvas_image_seq));
                sectionSet[1].objs.context.drawImage(sectionSet[1].objs.images[imageSeq], 0, 0);        
                
                break;
            
            case 2 :
                
                break;
        }
    }

    let yOffset = 0;

    let sectionYOffset = 0;

    let curSection = 0;


    const sectionSet = [
        {
            height : 0,
            multiple : 2,

            objs : {
                container : document.querySelector('#section-0')
            },

            vals : {

            }
        },
        
        {
            height : 0,
            multiple : 2,

            objs : {
                container : document.querySelector('#section-1'),
                canvas : document.querySelector('#main-canvas'),
                context : document.querySelector('#main-canvas').getContext('2d'),
                messageA : document.querySelector('.section1-message.a'),
                messageB : document.querySelector('.section1-message.b'),
                messageC : document.querySelector('.section1-message.c'),
                messageD : document.querySelector('.section1-message.d'),
                images : [],
            },

            vals : {
                imageCount : 566,

                canvas_image_seq : [0, 565, {start : 0, end : 0.95}],
                canvas_opacity_out : [1, 0, {start : 0.80, end : 0.95}],
                
                
                messageA_opacity_in : [0, 1, {start : 0.05, end : 0.14}],
                messageA_opacity_out : [1, 0, {start : 0.15, end : 0.24}],
                messageA_translate1 : [0, -30, {start : 0.05, end : 0.14}],
                messageA_translate2 : [-30, -60, {start : 0.15, end : 0.24}],

                messageB_opacity_in : [0, 1, {start : 0.25, end : 0.34}],
                messageB_opacity_out : [1, 0, {start : 0.35, end : 0.44}],
                messageB_translate1 : [0, -30, {start : 0.25, end : 0.34}],
                messageB_translate2 : [-30, -60, {start : 0.35, end : 0.44}],

                messageC_opacity_in : [0, 1, {start : 0.45, end : 0.54}],
                messageC_opacity_out : [1, 0, {start : 0.55, end : 0.64}],
                messageC_translate1 : [0, -30, {start : 0.45, end : 0.54}],
                messageC_translate2 : [-30, -60, {start : 0.55, end : 0.64}],

                
                messageD_opacity_in : [0, 1, {start : 0.65, end : 0.74}],
                messageD_opacity_out : [1, 0, {start : 0.75, end : 0.84}],
                messageD_translate1 : [0, -30, {start : 0.65, end : 0.74}],
                messageD_translate2 : [-30, -60, {start : 0.75, end : 0.84}],

                
            }
        },

        {
            height : 0,
            multiple : 2,

            objs : {
                container : document.querySelector('#section-2')
            },

            vals : {

            }
        }

    ];

    window.addEventListener('scroll', ()=>{
        yOffset = window.scrollY;

       curSection = getCurrentSection(); 

       sectionYOffset = yOffset - getPrevSectionHeight();

       console.log({yOffset, sectionYOffset})
       setBodyID(curSection);
       setLocalnavMenu();

       playAnimation();


    })

    window.addEventListener('load', ()=>{
        
        setLayout();

        setCanvas();

    
        curSection = getCurrentSection();
        
        setLocalnavMenu();
        
        setBodyID(curSection);        
    });

    window.addEventListener('resize', ()=>{

        setLayout();

        setCanvas();

        //현재섹션을 가지고 옴
        curSection = getCurrentSection();
        
        setLocalnavMenu();
        
        //body id를 설정
        setBodyID(curSection);
    })


   
})()