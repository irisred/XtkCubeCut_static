var cubeOriginal = null;
var cubeUseCut = null;
var as = null;
var rendererCutCube = null;
var i;
window.onload = function () {
//    create a X 3D render;
    rendererCutCube = new X.renderer3D();
	rendererCutCube.init();
//    create two cubes and initialize them;
    cubeOriginal = new X.cube();
    cubeOriginal.lengthX = cubeOriginal.lengthY = cubeOriginal.lengthZ = 20;
    cubeOriginal.center = [0, 0, 0];
    cubeOriginal.color = [1, 1, 1];
    cubeOriginal.transform.translateX(30);
    cubeUseCut = new X.cube();
    cubeUseCut.lengthX = cubeUseCut.lengthY = cubeUseCut.lengthZ = 5;
    cubeUseCut.center = [10, 10, 10];
    cubeUseCut.color = [1, 0, 0];
    cubeUseCut.transform.translateX(-30);
//    add the cubes to the renderer;
    rendererCutCube.add(cubeOriginal);
    rendererCutCube.add(cubeUseCut);
    as = cubeOriginal.subtract(cubeUseCut);
    
    cubeUseCut.update = function(){
        cubeUseCut.center[0] -= 0.6;
        rendererCutCube.add(cubeUseCut);
        as = as.subtract(cubeUseCut);
        
    }

    for(i=0; i<30; i++)
        cubeUseCut.update();    
    rendererCutCube.add(as);
    rendererCutCube.render();
};

