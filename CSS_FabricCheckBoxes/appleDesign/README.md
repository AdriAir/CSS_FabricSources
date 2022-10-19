The JS app.js is just to changing the bg-color. You can make the same thing just with css unsing something like the following code:

@keyframe checked {
    from {
        background-color: white;
    }

    to {
        background-color: black;
    }
}

@keyframe unChecked {
    from {
        background-color: black;
    }

    to {
        background-color: white;
    }
}