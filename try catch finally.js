<script>
    function readData() {
        function() {
            console.log("啊出问题了");
        }
    }

    readData();

    window.onerror = function(message, url, line, col, error) {
        console.log(`${message} AT ${line}: ${col} of ${url}`)
    };
</script>