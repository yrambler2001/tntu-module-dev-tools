eval(atob('KCgoKSA9PiB7CiAgT2JqZWN0LnZhbHVlcyhnZXRFdmVudExpc3RlbmVycyhkb2N1bWVudCkpLm1hcCgodikgPT4gdikuZmxhdCgpLm1hcCgoZikgPT4gW2YudHlwZSwgZi5saXN0ZW5lciwgZi5saXN0ZW5lci50b1N0cmluZygpXSkKICAgIC5maWx0ZXIoKFt0eXBlLCBmLCBzdHJdKSA9PiBzdHIuaW5jbHVkZXMoJ3ByZXZlbnRTZWxlY3Rpb24nKSB8fCBzdHIuaW5jbHVkZXMoJ2tpbGxDdHJsQScpKQogICAgLmZvckVhY2goKFt0eXBlLCBmXSkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmKSk7CgogIGpRdWVyeSh3aW5kb3cpLm9mZignYmx1cicpOwogIGNvbnN0IHRpbWVyVmFyRXhpc3RzID0gKHR5cGVvZiB0aW1lciAhPT0gJ3VuZGVmaW5lZCcpOwogIGNvbnN0IGdldElucHV0ID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigiZm9ybVtuYW1lPSd0ZXN0J10gPiBpbnB1dFtuYW1lKj0nYnQnXSIpOwogIGNvbnN0IGlucHV0RXhpc3RzID0gISFnZXRJbnB1dCgpOwoKICBpZiAoIWlucHV0RXhpc3RzICYmICF0aW1lclZhckV4aXN0cykgY29uc29sZS5sb2coJ25vIGluYWN0aXZlIHRpbWUgY291bnRlciBmb3VuZCwgaXQgaXMgb2snKTsKICB0aW1lclZhckV4aXN0cyAmJiBjbGVhckludGVydmFsKHRpbWVyKTsKICB0aW1lclZhckV4aXN0cyAmJiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7IGNsZWFySW50ZXJ2YWwodGltZXIpOyB9LCAxMDApOwogIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7CiAgICBibHVyX3RpbWUgPSAwOwogICAgaWYgKGlucHV0RXhpc3RzKSBnZXRJbnB1dCgpLnZhbHVlID0gJzAnOwogIH0sIDEwMDApOwogIHJldHVybiAnb2snOwp9KSgpKTs='))



// ((() => {
//   Object.values(getEventListeners(document)).map((v) => v).flat().map((f) => [f.type, f.listener, f.listener.toString()])
//     .filter(([type, f, str]) => str.includes('preventSelection') || str.includes('killCtrlA'))
//     .forEach(([type, f]) => document.removeEventListener(type, f));

//   jQuery(window).off('blur');
//   const timerVarExists = (typeof timer !== 'undefined');
//   const getInput = () => document.querySelector("form[name='test'] > input[name*='bt']");
//   const inputExists = !!getInput();

//   if (!inputExists && !timerVarExists) console.log('no inactive time counter found, it is ok');
//   timerVarExists && clearInterval(timer);
//   timerVarExists && window.setTimeout(() => { clearInterval(timer); }, 100);
//   window.setInterval(() => {
//     blur_time = 0;
//     if (inputExists) getInput().value = '0';
//   }, 1000);
//   return 'ok';
// })());