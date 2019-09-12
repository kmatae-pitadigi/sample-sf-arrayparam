public with sharing class ArrayParam {
    @AuraEnabled
    public static string setParam(string param){
        string result = '';

        List<Object> lm = (List<Object>)JSON.deserializeUntyped(param);

        for(Integer i=0 ; i<lm.size() ; i++) {
            Map<String, Object> m = (Map<String, Object>)lm[i];
            result += '[ \r\n';
            result += '{' + (Integer)m.get('intParam') + ',' + (Boolean)m.get('boolParam') + ',' + (String)m.get('strParam') + '}\r\n';
            result += '], \r\n';
        }

        return result;
    }
}
