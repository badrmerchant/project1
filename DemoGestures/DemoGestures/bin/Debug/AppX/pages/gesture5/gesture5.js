// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/gesture5/gesture5.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            zoomFactor.value = contentZoom.msContentZoomFactor.toFixed(2);
            
            contentZoom.addEventListener("MSContentZoom", function (e) {
                zoomFactor.value = contentZoom.msContentZoomFactor.toFixed(2);
            });
            zoomFactor.addEventListener("change", function (e) {
                contentZoom.msContentZoomFactor = zoomFactor.value;
            });
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });
})();
