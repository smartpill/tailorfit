(function(a){var b={maxWidth:0,maxHeight:0,ratio:0,offsetX:0,offsetY:0,center:"both",round:"round"};jQuery.fn.tailorfit=function(k,j){return this.each(function(){var l=a(this);if(typeof k==="string"&&j!==undefined){l.data(k,j);i(l);return l}else{a.extend(l.data(),a.extend(b,k));l.data("tailorfit",true)}if(l.data("tailorfit")===true){a(window).off(".tailorfit")}l.css({position:"relative",display:"block"});a(window).on("load.tailorfit resize.tailorfit",function(){i(l)});i(l)});function i(n){var u=n.parent();var A=u.width();var p=u.height();var q=g(n.data("ratio"));var B=c(n.data("round"));var m=n.data("center");var z=g(n.data("maxWidth"),A);var v=g(n.data("maxHeight"),p);var t,o;if(q===0){o=Math.min(v,p);t=Math.min(z,A)}else{o=Math.min(Math.min(v,p),Math.min(z,A)/q);t=q*o}if(t<=0&&o<=0){return}var s=e(m,A,t);var r=d(m,p,o);var l=a.map([s,r,t,o],B);n.css({left:l[0]+g(n.data("offsetX")),top:l[1]+g(n.data("offsetY")),width:l[2],height:l[3]})}function c(l){switch(l){case"floor":return Math.floor;case"ceiling":return Math.ceil;default:return Math.round}}function f(l){return typeof l==="string"&&l.slice(-1)==="%"}function g(m,l){switch(typeof m){case"number":return isNaN(m)?0:m;case"string":if(f(m)){return h(m)*l||1}else{m=parseFloat(m);return isNaN(m)?0:m}break;default:return 0}}function h(l){return parseFloat(l.slice(0,-1))/100}function e(l,m,n){if(l==="vertical"){return 0}else{return(m-n)/2}}function d(l,m,n){if(l==="horizontal"){return 0}else{return(m-n)/2}}}})(jQuery);