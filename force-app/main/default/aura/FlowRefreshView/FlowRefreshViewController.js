/**
 * Created by krisjacobs on 29/11/2023.
 */

({
   invoke : function(component, event, helper) {
        $A.get('e.force:refreshView').fire();
   }
});