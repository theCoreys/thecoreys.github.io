document.addEventListener("DOMContentLoaded",function(){document.getElementById("hamburger").addEventListener("click",function(){e.classList.contains("open")||e.classList.add("open")});const e=document.getElementById("menubar");document.getElementById("close-burger").addEventListener("click",function(){e.classList.remove("open")})});var path=window.location.pathname,page=path.split("/").pop();if("index.html"!=page)var audio=new Audio("../Multimedia/sound/10th_Anniversary.mp3"),on="../Multimedia/sound/on.svg",off="../Multimedia/sound/off.svg";document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".speaker");e.addEventListener("click",function(){audio.paused?(e.setAttribute("src",on),audio.play()):(e.setAttribute("src",off),audio.pause())})}),document.addEventListener("DOMContentLoaded",function(){let e=[],t=[];function n(e){let t=e.length;for(;t>0;){let n=Math.floor(Math.random()*t),o=e[--t];e[t]=e[n],e[n]=o}return e}let o=[],i=[],l=[],a=[],u=document.querySelector("#form");function c(){e=n(t);for(let t=0;t<e.length;t++){sq=e[t];let l="<legend>"+sq.question+"</legend>",a='<label for="choice1_'+t+'">'+sq.choice1+'</label><input type="radio" name="question'+t+'" id="choice1_'+t+'" value="ch1"><br>';o.push(a);let c='<label for="choice2_'+t+'">'+sq.choice2+'</label><input type="radio" name="question'+t+'" id="choice2_'+t+'" value="ch2"><br>';o.push(c);let s='<label for="choice3_'+t+'">'+sq.choice3+'</label><input type="radio" name="question'+t+'" id="choice3_'+t+'" value="ch3"><br>';o.push(s);let d='<label for="choice4_'+t+'">'+sq.choice4+'</label><input type="radio" name="question'+t+'" id="choice4_'+t+'" value="ch4"><br>';o.push(d),a=(i=n(o))[0],c=i[1],s=i[2],d=i[3],questionField=document.createElement("fieldset"),questionField.classList.add("quizfield"),questionField.classList.add("question"+t),questionField.innerHTML=l+a+c+s+d,u.appendChild(questionField),o=[],i=[]}let c=document.createElement("input");c.type="submit",c.name="submit",c.value="Submit",c.classList.add("coolbutton"),u.appendChild(c),c.addEventListener("click",function(){let n=0;for(var o=0;o<e.length;o++)l[o]=document.querySelector("input[name=question"+o+"]:checked"),l[o]&&(a[o]=document.querySelector("label[for="+l[o].id+"]"),a[o].innerText==t[o].answer?(a[o].style.color="green",n++):a[o].style.color="red");document.getElementById("quiz-content").innerText="You got "+n+" out of the "+e.length+" questions right!";let i=document.querySelector(".quiz-reset");i.value=6===n?"Cool!":"Maybe try again?",s.style.display="block",function(e,t){e.style.opacity=0;var n=+new Date,o=function(){e.style.opacity=+e.style.opacity+(new Date-n)/t,n=+new Date,+e.style.opacity<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()}(s,50)})}let s=document.querySelector(".popup");document.querySelector(".popup-close").addEventListener("click",function(e){s.style.display="none",e.preventDefault()}),document.querySelector(".quiz-reset").addEventListener("click",function(e){s.style.display="none",u.innerHTML="",c(),e.preventDefault()}),function(e){let t=new XMLHttpRequest;t.overrideMimeType("application/json"),t.open("GET","../data/quizQuestions.json",!0),t.onreadystatechange=function(){4==t.readyState&&"200"==t.status&&e(t.responseText)},t.send(null)}(function(e){t=JSON.parse(e),c()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuanMiLCJjb250ZW50TXVzaWNQbGF5ZXIuanMiLCJxdWl6LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEVsZW1lbnRCeUlkIiwibWVudSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwicmVtb3ZlIiwicGF0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJwYWdlIiwic3BsaXQiLCJwb3AiLCJhdWRpbyIsIkF1ZGlvIiwib24iLCJvZmYiLCJzcGVha2VyIiwicXVlcnlTZWxlY3RvciIsInBhdXNlZCIsInNldEF0dHJpYnV0ZSIsInBsYXkiLCJwYXVzZSIsInNodWZmbGVkIiwidW5TaHVmZmxlZCIsInNodWZmbGUiLCJhcnJheSIsImNvdW50ZXIiLCJsZW5ndGgiLCJpbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRlbXAiLCJ1blNodWZmbGVkQ2hvaWNlcyIsInNodWZmbGVkQ2hvaWNlcyIsImFuc3dlcnMiLCJsYWJlbHMiLCJmb3JtIiwicmVuZGVyIiwiaSIsInNxIiwibGVnZW5kIiwicXVlc3Rpb24iLCJjaDEiLCJjaG9pY2UxIiwicHVzaCIsImNoMiIsImNob2ljZTIiLCJjaDMiLCJjaG9pY2UzIiwiY2g0IiwiY2hvaWNlNCIsInF1ZXN0aW9uRmllbGQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJzdWJtaXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiY29ycmVjdFN1bSIsImlkIiwiaW5uZXJUZXh0IiwiYW5zd2VyIiwic3R5bGUiLCJjb2xvciIsInJlc2V0QnV0dG9uIiwicG9wdXAiLCJkaXNwbGF5IiwiZWwiLCJ0aW1lIiwib3BhY2l0eSIsImxhc3QiLCJEYXRlIiwidGljayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJmYWRlSW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJjYWxsYmFjayIsInhvYmoiLCJYTUxIdHRwUmVxdWVzdCIsIm92ZXJyaWRlTWltZVR5cGUiLCJvcGVuIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInNlbmQiLCJsb2FkSlNPTiIsInJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiQUFBQUEsU0FBU0MsaUJBQWlCLG1CQUFvQixXQUM3QkQsU0FBU0UsZUFBZSxhQUM5QkQsaUJBQWlCLFFBQVMsV0FReEJFLEVBQUtDLFVBQVVDLFNBQVMsU0FDekJGLEVBQUtDLFVBQVVFLElBQUksVUFMM0IsTUFBTUgsRUFBT0gsU0FBU0UsZUFBZSxXQVN2QkYsU0FBU0UsZUFBZSxnQkFDaENELGlCQUFpQixRQUFTLFdBQzVCRSxFQUFLQyxVQUFVRyxPQUFPLFlDaEI5QixJQUFJQyxLQUFPQyxPQUFPQyxTQUFTQyxTQUN2QkMsS0FBT0osS0FBS0ssTUFBTSxLQUFLQyxNQUUzQixHQUFTLGNBQU5GLEtBQ0MsSUFBSUcsTUFBUSxJQUFJQyxNQUFNLDRDQUNsQkMsR0FBSyw2QkFDTEMsSUFBTSw4QkFFZGxCLFNBQVNDLGlCQUFpQixtQkFBb0IsV0FFMUMsSUFBSWtCLEVBQVVuQixTQUFTb0IsY0FBYyxZQUNyQ0QsRUFBUWxCLGlCQUFpQixRQUFTLFdBQzFCYyxNQUFNTSxRQUNORixFQUFRRyxhQUFhLE1BQU9MLElBQzVCRixNQUFNUSxTQUVOSixFQUFRRyxhQUFhLE1BQU9KLEtBQzVCSCxNQUFNUyxhQ2xCbEJ4QixTQUFTQyxpQkFBaUIsbUJBQW9CLFdBRTFDLElBQUl3QixFQUFXLEdBQ1hDLEVBQWEsR0FLakIsU0FBU0MsRUFBUUMsR0FDYixJQUFJQyxFQUFVRCxFQUFNRSxPQUdwQixLQUFPRCxFQUFVLEdBQUcsQ0FFaEIsSUFBSUUsRUFBUUMsS0FBS0MsTUFBTUQsS0FBS0UsU0FBV0wsR0FJbkNNLEVBQU9QLElBRlhDLEdBR0FELEVBQU1DLEdBQVdELEVBQU1HLEdBQ3ZCSCxFQUFNRyxHQUFTSSxFQUVuQixPQUFPUCxFQXVC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QUFNSSxRQUFVLE9BQ3RCVSxFQUFFQyxtQkFJTmxGLFNBQVNvQixjQUFjLGVBQWVuQixpQkFBaUIsUUFBUyxTQUFVZ0YsR0FDdEVYLEVBQU1ILE1BQU1JLFFBQVUsT0FFdEIvQixFQUFLaUIsVUFBVSxHQUVmaEIsSUFDQXdDLEVBQUVDLG1CQU9OLFNBQWtCQyxHQUVkLElBQUlDLEVBQU8sSUFBSUMsZUFDZkQsRUFBS0UsaUJBQWlCLG9CQUN0QkYsRUFBS0csS0FBSyxNQUFPLDhCQUE4QixHQUMvQ0gsRUFBS0ksbUJBQXFCLFdBQ0MsR0FBbkJKLEVBQUtLLFlBQWtDLE9BQWZMLEVBQUtNLFFBRTdCUCxFQUFTQyxFQUFLTyxlQUd0QlAsRUFBS1EsS0FBSyxNQUtkQyxDQUFTLFNBQVVDLEdBRWZwRSxFQUFhcUUsS0FBS0MsTUFBTUYsR0FDeEJyRCIsImZpbGUiOiJxdWl6LXByb2R1Y3Rpb24tc2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW1idXJnZXInKTtcclxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0b2dnbGVGaWx0ZXJpbmcoKTtcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudWJhclwiKTtcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVGaWx0ZXJpbmcoKSB7XHJcbiAgICAgICAgLy9JZiBvcGVuIGNsb3NlIGl0LCBpZiBjbG9zZWQgb3BlbiBpdC5cclxuICAgICAgICBpZiAoIW1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1idXJnZXJcIik7XHJcbiAgICBlbXB0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgIH0pXHJcbn0pOyIsIlxyXG52YXIgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxudmFyIHBhZ2UgPSBwYXRoLnNwbGl0KFwiL1wiKS5wb3AoKTtcclxuXHJcbmlmKHBhZ2UhPVwiaW5kZXguaHRtbFwiKXtcclxuICAgIHZhciBhdWRpbyA9IG5ldyBBdWRpbygnLi4vTXVsdGltZWRpYS9zb3VuZC8xMHRoX0Fubml2ZXJzYXJ5Lm1wMycpO1xyXG4gICAgdmFyIG9uID0gXCIuLi9NdWx0aW1lZGlhL3NvdW5kL29uLnN2Z1wiO1xyXG4gICAgdmFyIG9mZiA9IFwiLi4vTXVsdGltZWRpYS9zb3VuZC9vZmYuc3ZnXCI7XHJcbn1cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgICBsZXQgc3BlYWtlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGVha2VyJyk7XHJcbiAgICBzcGVha2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChhdWRpby5wYXVzZWQpIHtcclxuICAgICAgICAgICAgc3BlYWtlci5zZXRBdHRyaWJ1dGUoJ3NyYycsIG9uKTtcclxuICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNwZWFrZXIuc2V0QXR0cmlidXRlKCdzcmMnLCBvZmYpO1xyXG4gICAgICAgICAgICBhdWRpby5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFNodWZmbGVkIGFuZCB1bi1zaHVmZmxlZCBxdWVzdGlvbnMuIERpZmZlcmVudCB0aGFuIHNodWZmbGVkIGNob2ljZXMuXHJcbiAgICBsZXQgc2h1ZmZsZWQgPSBbXTtcclxuICAgIGxldCB1blNodWZmbGVkID0gW107XHJcbiAgICAvKipcclxuICAgICAqIFNodWZmbGVzIGFycmF5IGluIHBsYWNlLlxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgaXRlbXMgQW4gYXJyYXkgY29udGFpbmluZyB0aGUgaXRlbXMuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcclxuICAgICAgICBsZXQgY291bnRlciA9IGFycmF5Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgYXJlIGVsZW1lbnRzIGluIHRoZSBhcnJheVxyXG4gICAgICAgIHdoaWxlIChjb3VudGVyID4gMCkge1xyXG4gICAgICAgICAgICAvLyBQaWNrIGEgcmFuZG9tIGluZGV4XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvdW50ZXIpO1xyXG4gICAgICAgICAgICAvLyBEZWNyZWFzZSBjb3VudGVyIGJ5IDFcclxuICAgICAgICAgICAgY291bnRlci0tO1xyXG4gICAgICAgICAgICAvLyBBbmQgc3dhcCB0aGUgbGFzdCBlbGVtZW50IHdpdGggaXRcclxuICAgICAgICAgICAgbGV0IHRlbXAgPSBhcnJheVtjb3VudGVyXTtcclxuICAgICAgICAgICAgYXJyYXlbY291bnRlcl0gPSBhcnJheVtpbmRleF07XHJcbiAgICAgICAgICAgIGFycmF5W2luZGV4XSA9IHRlbXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZhZGUgaW4gdGhlIG1vZGFsIGRpdi5cclxuICAgICAqIEBwYXJhbSB7Kn0gZWwgVGhlIG1vZGFsIGRpdiBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIHsqfSB0aW1lIFRoZSBhbW91bnQgb2YgdGltZSBpdCB0YWtlcyB0byBmYWRlIGluLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBmYWRlSW4oZWwsIHRpbWUpIHtcclxuICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuXHJcbiAgICAgICAgdmFyIGxhc3QgPSArbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgdGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZWwuc3R5bGUub3BhY2l0eSA9ICtlbC5zdHlsZS5vcGFjaXR5ICsgKG5ldyBEYXRlKCkgLSBsYXN0KSAvIHRpbWU7XHJcbiAgICAgICAgICAgIGxhc3QgPSArbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgrZWwuc3R5bGUub3BhY2l0eSA8IDEpIHtcclxuICAgICAgICAgICAgICAgICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKSkgfHwgc2V0VGltZW91dCh0aWNrLCAxNik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdW5TaHVmZmxlZENob2ljZXMgPSBbXTsgLy8gTk9UIHRvIGJlIGNvbmZ1c2VkIHdpdGggdW4tc2h1ZmZsZWQgcXVlc3Rpb25zLlxyXG4gICAgbGV0IHNodWZmbGVkQ2hvaWNlcyA9IFtdOyAvLyBOT1QgdG8gYmUgY29uZnVzZWQgd2l0aCBzaHVmZmxlZCBxdWVzdGlvbnMuXHJcbiAgICBsZXQgYW5zd2VycyA9IFtdO1xyXG4gICAgbGV0IGxhYmVscyA9IFtdO1xyXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybScpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXIgdGhlIHF1ZXN0aW9ucyBvbiBzY3JlZW4uXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgICAgICAvLyBTaHVmZmxlIHRoZSBhcnJheSBzbyB0aGF0IHF1ZXN0aW9ucyBhcmUgcmFuZG9taXplZC5cclxuICAgICAgICBzaHVmZmxlZCA9IHNodWZmbGUodW5TaHVmZmxlZCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2h1ZmZsZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc3EgPSBzaHVmZmxlZFtpXTtcclxuICAgICAgICAgICAgbGV0IGxlZ2VuZCA9ICc8bGVnZW5kPicgKyBzcS5xdWVzdGlvbiArICc8L2xlZ2VuZD4nO1xyXG4gICAgICAgICAgICBsZXQgY2gxID0gJzxsYWJlbCBmb3I9XCJjaG9pY2UxXycgKyBpICsgJ1wiPicgKyBzcS5jaG9pY2UxICsgJzwvbGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJxdWVzdGlvbicgKyBpICsgJ1wiIGlkPVwiY2hvaWNlMV8nICsgaSArICdcIiB2YWx1ZT1cImNoMVwiPjxicj4nO1xyXG4gICAgICAgICAgICB1blNodWZmbGVkQ2hvaWNlcy5wdXNoKGNoMSk7XHJcbiAgICAgICAgICAgIGxldCBjaDIgPSAnPGxhYmVsIGZvcj1cImNob2ljZTJfJyArIGkgKyAnXCI+JyArIHNxLmNob2ljZTIgKyAnPC9sYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInF1ZXN0aW9uJyArIGkgKyAnXCIgaWQ9XCJjaG9pY2UyXycgKyBpICsgJ1wiIHZhbHVlPVwiY2gyXCI+PGJyPic7XHJcbiAgICAgICAgICAgIHVuU2h1ZmZsZWRDaG9pY2VzLnB1c2goY2gyKTtcclxuICAgICAgICAgICAgbGV0IGNoMyA9ICc8bGFiZWwgZm9yPVwiY2hvaWNlM18nICsgaSArICdcIj4nICsgc3EuY2hvaWNlMyArICc8L2xhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicXVlc3Rpb24nICsgaSArICdcIiBpZD1cImNob2ljZTNfJyArIGkgKyAnXCIgdmFsdWU9XCJjaDNcIj48YnI+JztcclxuICAgICAgICAgICAgdW5TaHVmZmxlZENob2ljZXMucHVzaChjaDMpO1xyXG4gICAgICAgICAgICBsZXQgY2g0ID0gJzxsYWJlbCBmb3I9XCJjaG9pY2U0XycgKyBpICsgJ1wiPicgKyBzcS5jaG9pY2U0ICsgJzwvbGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJxdWVzdGlvbicgKyBpICsgJ1wiIGlkPVwiY2hvaWNlNF8nICsgaSArICdcIiB2YWx1ZT1cImNoNFwiPjxicj4nO1xyXG4gICAgICAgICAgICB1blNodWZmbGVkQ2hvaWNlcy5wdXNoKGNoNCk7XHJcbiAgICAgICAgICAgIHNodWZmbGVkQ2hvaWNlcyA9IHNodWZmbGUodW5TaHVmZmxlZENob2ljZXMpO1xyXG4gICAgICAgICAgICAvLyBEZXN0cnVjdCBhcnJheSBpbiBFUzVcclxuICAgICAgICAgICAgY2gxID0gc2h1ZmZsZWRDaG9pY2VzWzBdO1xyXG4gICAgICAgICAgICBjaDIgPSBzaHVmZmxlZENob2ljZXNbMV07XHJcbiAgICAgICAgICAgIGNoMyA9IHNodWZmbGVkQ2hvaWNlc1syXTtcclxuICAgICAgICAgICAgY2g0ID0gc2h1ZmZsZWRDaG9pY2VzWzNdO1xyXG5cclxuICAgICAgICAgICAgcXVlc3Rpb25GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uRmllbGQuY2xhc3NMaXN0LmFkZCgncXVpemZpZWxkJyk7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uRmllbGQuY2xhc3NMaXN0LmFkZCgncXVlc3Rpb24nICsgaSk7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uRmllbGQuaW5uZXJIVE1MID0gbGVnZW5kICsgY2gxICsgY2gyICsgY2gzICsgY2g0O1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHF1ZXN0aW9uRmllbGQpO1xyXG5cclxuICAgICAgICAgICAgLy8gRW1wdHkgdGhlIGNob2ljZXMgc28gdGhhdCB0aGV5IHdvbid0IHN0YWNrIG9uIGV2ZXJ5IGxvb3AuXHJcbiAgICAgICAgICAgIHVuU2h1ZmZsZWRDaG9pY2VzID0gW107XHJcbiAgICAgICAgICAgIHNodWZmbGVkQ2hvaWNlcyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBzdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgICAgIHN1Ym1pdC5uYW1lID0gJ3N1Ym1pdCc7XHJcbiAgICAgICAgc3VibWl0LnZhbHVlID0gJ1N1Ym1pdCc7XHJcbiAgICAgICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ2Nvb2xidXR0b24nKTtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XHJcblxyXG4gICAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGNvcnJlY3RTdW0gPSAwO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNodWZmbGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHZhbHVlcyBvZiB0aGUgY2hlY2tlZCBpbnB1dCBmaWVsZHMuXHJcbiAgICAgICAgICAgICAgICBhbnN3ZXJzW2ldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9cXVlc3Rpb25cIiArIGkgKyBcIl06Y2hlY2tlZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIHRoZSB1c2VyIGNoZWNrZWQgdGhlIHF1ZXN0aW9uLlxyXG4gICAgICAgICAgICAgICAgaWYgKGFuc3dlcnNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGxhYmVscyBvZiB0aGUgYW5zd2VyZWQgcXVlc3Rpb25zLlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsc1tpXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFtmb3I9XCIgKyBhbnN3ZXJzW2ldLmlkICsgXCJdXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobGFiZWxzW2ldLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh1blNodWZmbGVkW2ldLmFuc3dlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBhbnN3ZXIgd2FzIGNvcnJlY3QuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsc1tpXS5pbm5lclRleHQgPT0gdW5TaHVmZmxlZFtpXS5hbnN3ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzW2ldLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0U3VtKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzW2ldLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEZpbGwgdGhlIG1vZGFsIHdpdGggdGhlIHJlc3VsdHMuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWl6LWNvbnRlbnQnKS5pbm5lclRleHQgPSAnWW91IGdvdCAnICsgY29ycmVjdFN1bSArICcgb3V0IG9mIHRoZSAnICsgc2h1ZmZsZWQubGVuZ3RoICsgJyBxdWVzdGlvbnMgcmlnaHQhJ1xyXG4gICAgICAgICAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpei1yZXNldCcpO1xyXG4gICAgICAgICAgICBpZihjb3JyZWN0U3VtPT09Nil7XHJcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvbi52YWx1ZSA9IFwiQ29vbCFcIjtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvbi52YWx1ZSA9IFwiTWF5YmUgdHJ5IGFnYWluP1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE9wZW4gdGhlIG1vZGFsLlxyXG4gICAgICAgICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICBmYWRlSW4ocG9wdXAsIDUwKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xyXG4gIC8qICAvLyBPcGVuIGxpbmsgKHVzZWQgZm9yIGRlYmJ1Z2luZyB0aGUgbW9kYWwpLlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGZhZGVJbihwb3B1cCwgNTApO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pOyAqL1xyXG5cclxuICAgIC8vIENsb3NlIHRoZSBtb2RhbC5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUmVzZXQgdGhlIHF1aXouXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpei1yZXNldCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgLy8gQ2xlYXIgdGhlIHF1aXogZm9ybS5cclxuICAgICAgICBmb3JtLmlubmVySFRNTD1cIlwiO1xyXG4gICAgICAgIC8vIFJlLXJlbmRlciB0aGUgcXVpeiBmb3JtLlxyXG4gICAgICAgIHJlbmRlcigpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGEgWE1MSHR0cFJlcXVlc3QgYW5kIGxvYWQgYXN5bmNocm9ub3VzbHkgdGhlIGNvbnRlbnRzIG9mIHF1aXpRdWVzdGlvbnMuanNvbi5cclxuICAgICAqIEBwYXJhbSB7Kn0gY2FsbGJhY2sgXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGxvYWRKU09OKGNhbGxiYWNrKSB7XHJcblxyXG4gICAgICAgIGxldCB4b2JqID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeG9iai5vdmVycmlkZU1pbWVUeXBlKFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICB4b2JqLm9wZW4oJ0dFVCcsICcuLi9kYXRhL3F1aXpRdWVzdGlvbnMuanNvbicsIHRydWUpO1xyXG4gICAgICAgIHhvYmoub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeG9iai5yZWFkeVN0YXRlID09IDQgJiYgeG9iai5zdGF0dXMgPT0gXCIyMDBcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVxdWlyZWQgdXNlIG9mIGFuIGFub255bW91cyBjYWxsYmFjayBhcyAub3BlbiB3aWxsIE5PVCByZXR1cm4gYSB2YWx1ZSBidXQgc2ltcGx5IHJldHVybnMgdW5kZWZpbmVkIGluIGFzeW5jaHJvbm91cyBtb2RlLlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soeG9iai5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4b2JqLnNlbmQobnVsbCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vQSBzY3JpcHQgdG8gZmV0Y2ggdGhlIHF1aXogcXVlc3Rpb25zIGZyb20gdGhlIGpzb24gZmlsZSwgc2h1ZmxsZSB0aGVtLCBhZGQgdGhlbSBvbmUgYnkgb25lIHRvIHRoZSBkb20sIGJ5IGxpc3RlbmluZyB0byB0aGUgc3VibWl0IGV2ZW50IHRoZSBzdWJtaXQgZXZlbnQgb2YgdGhlIHByZXZpb3VzIG9uZS5cclxuICAgIGxvYWRKU09OKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIC8vIFBhcnNlIEpTT04gc3RyaW5nIGludG8gb2JqZWN0XHJcbiAgICAgICAgdW5TaHVmZmxlZCA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgIHJlbmRlcigpO1xyXG4gICAgfSk7XHJcbn0pOyJdfQ==