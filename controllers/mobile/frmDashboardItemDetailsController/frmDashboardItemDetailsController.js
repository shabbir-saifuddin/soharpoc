define({ 

  setShadowOnFlexContainer: function(){
    if (kony.os.deviceInfo().osName !== "iPhone") 
      this.setShadowsDepth(this, 6, ['FlexHealthInsurance', 'FlexDctrAppointment', 'FlexNearBy'], false);
    else 
      this.setShadowsDepth(this, 1, ['FlexHealthInsurance', 'FlexDctrAppointment', 'FlexNearBy'], true);
  },

  setShadowsDepth: function(scope, depth, widgets, isIphone) {
    for (var i = 0; i < widgets.length; i++) {
      scope.view[widgets[i]].shadowDepth = depth;
      if (isIphone) {
        scope.view[widgets[i]].clipBounds = false;
        scope.view[widgets[i]].shadowType = constants.VIEW_BOUNDS_SHADOW;
      }
    }
  },

});