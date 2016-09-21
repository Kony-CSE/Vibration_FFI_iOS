//Form JS File
function frmHome_button999296733482276_onClick_seq0(eventobject) {
    //Invokes function 'vibrating'
    Vibrate.vibrating();
};

function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var button999296733482276 = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "btnFocus",
        "height": "50dp",
        "id": "button999296733482276",
        "isVisible": true,
        "left": "252dp",
        "onClick": frmHome_button999296733482276_onClick_seq0,
        "skin": "btnNormal",
        "text": "Vibrate Device",
        "top": "125dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "containerWeight": 11,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmHome.add(
    button999296733482276);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "bouncesZoom": true,
        "enabledForIdleTimeout": false,
        "enableScrolling": true,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "maxZoomScale": 1.0,
        "minZoomScale": 1.0,
        "needAppMenu": true,
        "pagingEnabled": false,
        "skin": "frm",
        "title": null,
        "zoomScale": 1.0
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none",
            "transitionDuration": 0.3
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none",
            "transitionDuration": 0.3
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
};