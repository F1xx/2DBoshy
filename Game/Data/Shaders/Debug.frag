#version 120

uniform sampler2D u_Texture;

varying vec2 v_UV;

void main()
{
	gl_FragColor = gl_Color;
}
