import {
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  PointLight,
  SpotLight,
  DirectionalLight,
  MeshBuilder,
  Mesh,
  Light,
  Camera,
  Engine,
  StandardMaterial,
  Color3,
  ShadowGenerator,
  Texture
} from "@babylonjs/core";

export interface SceneData {
    scene: Scene;
    box?: Mesh;
    light?:Light;
    spot?: SpotLight;
    hemi?:HemisphericLight;
    point?:PointLight;
    dlight?:DirectionalLight;
    sphere?: Mesh;
    cone?: Mesh;
    triangle?: Mesh;
    cylinder?: Mesh;
    capsule?: Mesh;
    ground?: Mesh;
    camera?: Camera;
 }

