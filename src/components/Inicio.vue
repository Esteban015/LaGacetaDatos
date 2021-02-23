<template>
    <div>
        <button class="mdl-button mdl-js-button mdl-button--raised" onclick="authenticate().then(loadClient)">
        AUTENTICAR
        </button>
        <button class="mdl-button mdl-js-button mdl-button--raised" onclick="execute()">
        EJECUTAR
        </button>
    </div>
</template>