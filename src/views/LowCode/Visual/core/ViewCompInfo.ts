
export default [
    {
        name:'图片',
        type:'img',
        tag:'img',
        icon:'icon-image1',
        props:{
            src:'https://avatars.githubusercontent.com/u/59641156?v=4',
            draggable:false
        },
        style:{
            width:'100%',
            height:'100%'
        },
        formId:'c0c67e96-858b-4303-999c-92d0d39cb792'
    },
    {
        name:'文本',
        type:'text',
        tag:'span',
        icon:'icon-text',
        props:{
            value:'text'
        }
    },
    {
        name:'视频',
        type:'video',
        tag:'video',
        icon:'icon-video',
        props:{
            src:'',
            controls:true,
            draggable:false
        },
        style:{
            position:'relative',
            width:'100%',
            height:'100%',
            'object-fit':'fill',
            'z-index':-1
        }
    },
    {
        name:'嵌入页',
        type:'iframe',
        tag:'iframe',
        icon:'icon-HTML',
        props:{
            src:'http://120.26.161.36:8080/',
            draggable:false
        },
        style:{
            position:'relative',
            width:'100%',
            height:'100%',
            'z-index':-1
        }
    },
    {
        name:'柱状图',
        type:'bar',
        tag:'g-echart',
        icon:'icon-barchart',
        props:{
            option: {
                xAxis: {
                    type: 'category',
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        type: 'bar',
                    },
                ],
                dataset: {
                source: [
                    ['product', '2015', '2016', '2017'],
                    ['Matcha Latte', 43.3, 85.8, 93.7],
                    ['Milk Tea', 83.1, 73.4, 55.1],
                    ['Cheese Cocoa', 86.4, 65.2, 82.5],
                    ['Walnut Brownie', 72.4, 53.9, 39.1],
                ],
                },
            },
        },
        style:{
            width:'100%',
            height:'100%'
        }
    },
    {
        name:'折线图',
        type:'line',
        tag:'g-echart',
        icon:'icon-linechart',
        props:{
            option: {
                xAxis: {
                type: 'category',
                },
                yAxis: {
                type: 'value',
                },
                series: [
                {
                    type: 'line',
                },

                ],
                dataset: {
                source: [
                    ['product', '2015', '2016', '2017'],
                    ['Matcha Latte', 43.3, 85.8, 93.7],
                    ['Milk Tea', 83.1, 73.4, 55.1],
                    ['Cheese Cocoa', 86.4, 65.2, 82.5],
                    ['Walnut Brownie', 72.4, 53.9, 39.1],
                ],
                },
            },
        },
        style:{
            width:'100%',
            height:'100%'
        }
    }
]