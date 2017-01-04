
$(document).ready(function() {
    $(".panda").click(function() {
			var type = this.getAttribute("data-type");
			var tendance = this.getAttribute("data-tendance")
    		
    		if (type == null && tendance == null) {
    			alert("Oups, il n'y a pas de tendance ou de type à afficher")
    		} else {
				alert("Le type est : " + type + "." + " " + "La tendance est : " + tendance + ".");   
    		}
    });
});
