var size = 0;
var placement = 'point';

var style_ImovelRural_CEFIRINEMASet2025_12 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#e601ff";
    var bufferWidth = 0.5;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("DENOMINACA") !== null && resolution > 0 && resolution < 4) {
        labelText = String(feature.get("DENOMINACA"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(230,1,255,1.0)', lineDash: [8.74,1.748], lineCap: 'butt', lineJoin: 'miter', width: 1.748}),fill: new ol.style.Fill({color: 'rgba(230,1,255,0.43529411764705883)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
