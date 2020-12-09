eval(atob('KCgoKSA9PiB7CiAgT2JqZWN0LnZhbHVlcyhnZXRFdmVudExpc3RlbmVycyhkb2N1bWVudCkpLm1hcCgodikgPT4gdikuZmxhdCgpLm1hcCgoZikgPT4gW2YudHlwZSwgZi5saXN0ZW5lciwgZi5saXN0ZW5lci50b1N0cmluZygpXSkKICAgIC5maWx0ZXIoKFt0eXBlLCBmLCBzdHJdKSA9PiBzdHIuaW5jbHVkZXMoJ3ByZXZlbnRTZWxlY3Rpb24nKSB8fCBzdHIuaW5jbHVkZXMoJ2tpbGxDdHJsQScpKQogICAgLmZvckVhY2goKFt0eXBlLCBmXSkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmKSk7CgogIGpRdWVyeSh3aW5kb3cpLm9mZignYmx1cicpOwogIGNvbnN0IHRpbWVyVmFyRXhpc3RzID0gKHR5cGVvZiB0aW1lciAhPT0gJ3VuZGVmaW5lZCcpOwogIGNvbnN0IGdldElucHV0ID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigiZm9ybVtuYW1lPSd0ZXN0J10gPiBpbnB1dFtuYW1lKj0nYnQnXSIpOwogIGNvbnN0IGlucHV0RXhpc3RzID0gISFnZXRJbnB1dCgpOwoKICBpZiAoIWlucHV0RXhpc3RzICYmICF0aW1lclZhckV4aXN0cykgY29uc29sZS5sb2coJ25vIHRpbWVyIGZvdW5kLCBpdCBpcyBvaycpOwogIHRpbWVyVmFyRXhpc3RzICYmIGNsZWFySW50ZXJ2YWwodGltZXIpOwogIHRpbWVyVmFyRXhpc3RzICYmIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHsgY2xlYXJJbnRlcnZhbCh0aW1lcik7IH0sIDEwMCk7CiAgd2luZG93LnNldEludGVydmFsKCgpID0+IHsKICAgIGJsdXJfdGltZSA9IDA7CiAgICBpZiAoaW5wdXRFeGlzdHMpIGdldElucHV0KCkudmFsdWUgPSAnMCc7CiAgfSwgMTAwMCk7CiAgcmV0dXJuICdvayc7Cn0pKCkpOw=='))



// ((() => {
//   Object.values(getEventListeners(document)).map((v) => v).flat().map((f) => [f.type, f.listener, f.listener.toString()])
//     .filter(([type, f, str]) => str.includes('preventSelection') || str.includes('killCtrlA'))
//     .forEach(([type, f]) => document.removeEventListener(type, f));

//   jQuery(window).off('blur');
//   const timerVarExists = (typeof timer !== 'undefined');
//   const getInput = () => document.querySelector("form[name='test'] > input[name*='bt']");
//   const inputExists = !!getInput();

//   if (!inputExists && !timerVarExists) console.log('no timer found, it is ok');
//   timerVarExists && clearInterval(timer);
//   timerVarExists && window.setTimeout(() => { clearInterval(timer); }, 100);
//   window.setInterval(() => {
//     blur_time = 0;
//     if (inputExists) getInput().value = '0';
//   }, 1000);
//   return 'ok';
// })());