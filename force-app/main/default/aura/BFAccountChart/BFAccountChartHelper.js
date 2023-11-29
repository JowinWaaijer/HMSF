/**
 * Created by krisjacobs on 29/11/2023.
 */

({
    createComponent: function(cmp){
        $A.createComponent(
            "albiraSolutions:AccountChart",{
                "recordId" : cmp.get("v.recordId")
            },
            function(chart, status, errorMessage){
                if (status === "SUCCESS") {
                    cmp.set('v.body', chart);
                }
            }
        );
    }
});