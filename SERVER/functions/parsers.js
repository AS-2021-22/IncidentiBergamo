//because in the DB mysql the bool are saved as tinyInt type (0 - 255 where 0 is false and 1 to 255 true) this function parse it
const SQLparserBoolFieldsAndCoord = ({Pedoni,Velocipedi,Ciclomotori,MezziPesanti,Localizzazione,...obj}) => {
    function returnType(e){
        if(e == 0) return false
        else return true
    }

    function localizzazioneToList(loc){
        loc = loc.substr(1,loc.length-2).split(',')
        loc[0] = parseFloat(loc[0])
        loc[1] = parseFloat(loc[1])
        return loc
    }

    return {
        ...obj,
        Pedoni:returnType(Pedoni),
        Ciclomotori:returnType(Ciclomotori),
        Velocipedi:returnType(Velocipedi),
        MezziPesanti:returnType(MezziPesanti),
        Localizzazione:localizzazioneToList(Localizzazione)
    }
}

module.exports.SQLparserBoolFieldsAndCoord = SQLparserBoolFieldsAndCoord