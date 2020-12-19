<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name', 'SOE Colombia') }}</title>

    <meta name="description"
        content="Me inspira el saber de las mujeres, estoy comprometida con su autovaloración. Confiero pasión en el empoderamiento de cada mujer, con objetividad y claridad. Mi travesía personal refleja una combinación de saberes cotidianos, profesionales y sociales, inspirados en la necesidad de despertar conciencias de mujeres." />
    <meta name="keywords" content="Maria Victoria Aponte Valverde, Jenis Sagbini, Mujer, Empoderamiento" />
    <meta name="author" content="Geiler Elias Radillo Sarmiento" />

    <meta name="copyright" content="Laravel - vue - vuetify" />
    <meta name="robots" content="index" />

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">


</head>

<body>
    <div id="app">
        <vue-app></vue-app>
    </div>
    <script src="{{ mix('js/app.js') }}"></script>

</body>

</html>
