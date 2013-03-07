// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var input = Windows.Devices.Input;
    var eventList = new WinJS.Binding.List();
    var holdConverter = WinJS.Binding.converter(function (detail) {
        if (detail == MSGestureEvent.MSGESTURE_FLAG_BEGIN) {
            return "Start";
        } else if (detail == MSGestureEvent.MSGESTURE_FLAG_END) {
            return "End";
        } else if (detail == MSGestureEvent.MSGESTURE_FLAG_CANCEL) {
            return "Cancel";
        } else {
            return "";
        }
    });

    WinJS.Namespace.define("data", { eventList: eventList, holdConverter: holdConverter });
    
    WinJS.UI.Pages.define("/pages/gesture1/gesture1.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            /*
            targetElem.addEventListener("click", function (e) {
                data.eventList.unshift(e);
            });
            */
            
            var eventTypes = ["MSPointerDown", "MSGestureTap", "MSGestureHold"];
            var ges = new MSGesture();
            ges.target = targetElem;
            eventTypes.forEach(function (eventType) {
                targetElem.addEventListener(eventType, function (e) {
                    if (e.type == "MSPointerDown") {
                        ges.addPointer(e.pointerId);
                        //data.eventList.unshift(e);
                    } else {
                        data.eventList.unshift(e);
                    }
                }, false);
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
