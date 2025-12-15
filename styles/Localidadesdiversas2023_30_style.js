var size = 0;
var placement = 'point';

var style_Localidadesdiversas2023_30 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    var clusteredFeatures = feature.get("features");
    var labelFont = "10.4px \'Arial Black\', sans-serif";
    var labelFill = "#ffff00";
    var bufferColor = "";
    var bufferWidth = 0;
    size = clusteredFeatures.length;
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 0;
    if (size == 1) {
        textAlign = "left"
        offsetX = 8
        offsetY = 3
        var feature = clusteredFeatures[0];
        if (feature.get("nome") !== null) {
            labelText = String(feature.get("nome"));
        }
        key = value + "_" + labelText
    } else {
        labelText = size.toString()
        size = 2*(Math.log(size)/ Math.log(2))
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.8 + size,
             fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
