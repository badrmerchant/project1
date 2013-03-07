// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/gesture3/gesture3.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            var eventTypes = ["MSPointerDown", "MSGestureStart",
             "MSGestureEnd", "MSGestureChange"];
            function handleGestureEvent(e) {
                if (e.type == "MSPointerDown") {
                    gestures[e.target.id].addPointer(e.pointerId);
                } else {
                    e.target.style.transform = filterGesture(e);
                }
            } function filterGesture(e) {
                var matrix = new MSCSSMatrix(e.target.style.transform);
                switch (e.target.id) {
                    case "rotate":
                        return matrix.rotate(e.rotation * 180 / Math.PI);
                        break;
                    case "scale":
                        return matrix.scale(e.scale);
                        break;
                    case "pan":
                        return matrix.translate(e.translationX, e.translationY)
                        break;
                };
            }
            var ids = ["rotate", "scale", "pan"];
            var elems = [];
            var gestures = [];
            ids.forEach(function (id) {
                elems[id] = document.getElementById(id);
                gestures[id] = new MSGesture();
                gestures[id].target = elems[id];
                eventTypes.forEach(function (eventType) {
                    elems[id].addEventListener(eventType, handleGestureEvent);
                });
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
