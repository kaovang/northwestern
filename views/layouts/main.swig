<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{% block pageTitle %}Kao Vang - Northwestern Mutual Coding Exercise{% endblock %}</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    {% block stylesheets %}
    {% endblock %}
</head>
<body>
    <div class="container">
        {% block body %}
        {% endblock %}
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    {% block postContent %}
    {% endblock %}

</body>
</html>