{% extends "layouts/main.swig" %}

{% block stylesheets %}
    <link rel="stylesheet" href="/css/index.css">
{% endblock %}

{% block body %}
    <h2 class="text-center">Vehicle Manufacturers</h2>
    <form>
        <div class="form-block">
            <input id="filter-input" type="text" placeholder="Filter the things..." class="form-control">
        </div>
    </form>
    <div>
        <ul id="results-list"></ul>
    </div>
{% endblock %}

{% block postContent %}
    <script src="/js/thing_filter.js"></script>
{% endblock %}