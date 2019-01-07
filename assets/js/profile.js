const tau = 2 * Math.PI;
let foregrounds = [];
let arc;
let skills_displayed = false;
let $grid;
$( document ).ready(()=>{
    load_skills();
    load_isotope();

    var skills_top = $('#skills-section').offset().top - window.innerHeight;
    $(window).scroll(function(){
 		var page_top = $(document).scrollTop();
    	// console.log( pTop + ' - ' + oTop );
 		if( page_top > skills_top  && !skills_displayed){
            display_skills();
 		}
    });
    
});


function load_skills(){
    const width = d3.select('#skill-python').node().getBoundingClientRect().width * 0.7;
    const height = width;
    const innerRadius = width * 0.6 / 2;
    const outerRadius = width * 0.7 / 2;
    arc = d3.arc()
       .innerRadius(innerRadius)
       .outerRadius(outerRadius)
       .cornerRadius(outerRadius - innerRadius)
       .startAngle( 0 );
    
    const skills = [
        { element : '#skill-python', color : 'rgba(107, 61, 216, 0.5)', presentage : 0.95 },
        { element : '#skill-java',   color : 'rgba(41, 223, 162, 0.5)', presentage : 0.8  },
        { element : '#skill-ml',     color : 'rgba(235, 84, 147, 0.5)', presentage : 0.8  },
        { element : '#skill-dl',     color : 'rgba(233, 235, 84, 0.5)', presentage : 0.7  },
    ]
    
    skills.forEach(skill =>{
        let group = d3.select(skill.element)
            .insert('svg', ':first-child' ).attr('width', width).attr( 'height', height)
            .append('g').attr( 'transform', 'translate(' + width / 2 + ', ' + height / 2 + ')');
    
        let background = group.append('path')
            .datum({ endAngle : tau })
            .style('fill', 'rgba(221, 221, 221,0.5)')
            .attr('d', arc);
    
        let foreground = group.append('path')
            .datum({endAngle : 0 * tau })
            .style('fill', skill.color)
            .attr('d', arc);

        foregrounds.push({obj : foreground, presentage : skill.presentage});

    })  
}

function display_skills(){
    foregrounds.forEach(item =>{
        item.obj.transition()
            .duration(2000)
            .call(arcTween, item.presentage * tau);
    });
    $grid.isotope( { filter: '*' } );
    skills_displayed = true;
}

function arcTween(transition, newAngle) {
    transition.attrTween('d', d => {
        var interpolate = d3.interpolate(d.endAngle, newAngle);
        return t => {
            d.endAngle = interpolate(t);
            return arc(d);
        };
    });
}

function load_isotope(){
    $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    $('.filter-group').on('click', 'li', function() {
        let filterValue = $(this).attr('data-filter');
        $grid.isotope( { filter: filterValue } );
    });

    $('.filter-group').each(function(i, filter_group) {
        let $filter_group = $(filter_group);
        $filter_group.on('click', 'li', function() {
            $filter_group.find('.active-filter').removeClass('active-filter');
            $(this).addClass('active-filter');
        });
    });
}


