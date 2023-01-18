<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>

    @routes
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    @inertiaHead
    <style>
        a,
        a:link,
        a:visited,
        a:active {
            text-decoration: none;
        }



    </style>
</head>
<body>
@inertia
</body>
</html>
