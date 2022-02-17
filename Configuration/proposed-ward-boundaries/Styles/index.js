const AreaCommitteeColors = {
     'Marple North':'#ffffb3',
     'Bredbury Green and Romiley': '#bebada',
     'Bredbury and Woodley': '#fb8072',
     'Brinnington and Central': '#80b1d3',
     'Reddish South':'#b3de69',
     'Reddish North':'#fccde5',
     'Heatons South':'#ffed6f'
}

function getColor_AreaCommittees(d) {
        return AreaCommitteeColors[d]
}

function AreaCommitteestyle(feature) {
     return  {
        fillColor: getColor_AreaCommittees(feature.properties.committee_name),
        weight: 0,
        opacity: 0,
        color: '#000000',
        fillOpacity: 0.5
    }
}

const OldWardColors = {
    'Bramhall North':'#fb8072',
    'Bramhall South and Woodford': '#bebada',
    'Bredbury and Woodley':'#fb8072',
    'Bredbury Green and Romiley':'#80b1d3',
    'Brinnington and Central':'#b3de69',
    'Cheadle and Gatley':'#fccde5',
    'Cheadle Hulme North':'#ffed6f',
    'Cheadle Hulme South':'#ffffb3',
    'Davenport and Cale Green': '#bebada',
    'Edgeley and Cheadle Heath': '#80b1d3',
    'Hazel Grove':'#80b1d3',
    'Heald Green': '#80b1d3',
    'Heatons North':'#b3de69',
    'Heatons South': '#fccde5',
    'Manor':'#ffed6f',
    'Marple North':'#fb8072',
    'Marple South and High Lane': '#fccde5',
    'Offerton':'#b3de69',
    'Reddish North':'#fccde5',
    'Reddish South': '#ffed6f',
    'Stepping Hill': '#ffffb3'
}

function getColor_old_wards(u) {
         return OldWardColors[u]
}

function OldWardstyle(feature) {
     return {
        fillColor: getColor_old_wards(feature.properties.ward_name),
        weight: 0.5,
        opacity: 0.7,
        color: '#000000',
        fillOpacity: 0.7
    }
}

function OldWard30style(feature) {
     return {
        fillColor: getColor_old_wards(feature.properties.ward_name),
        weight: 0.5,
        opacity: 0.7,
        color: '#000000',
        fillOpacity: 0.3
    }
}

const WardAreastyle = {
    color: '#000000',
    weight: 3,
    opacity: 1,
    fillColor: '#fec44f',
    fillOpacity: 0
}

const OldWardOutlinestyle = {
    color: '#0000FF',
    weight: 3,
    opacity: 1,
    fillColor: '#fec44f',
    fillOpacity: 0
}

const ParliamentaryBoundarystyle = {
    color: '#DC143C',
    weight: 2,
    opacity: 1,
    fillColor: '#bc80bd',
    fillOpacity: 0
}

export {
    AreaCommitteestyle,
    WardAreastyle,
    ParliamentaryBoundarystyle,
    OldWardstyle,
    OldWardOutlinestyle,
    OldWard30style,
    OldWardColors,
    AreaCommitteeColors,
}