"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[990],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7867:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Changelog",p={type:"mdx",permalink:"/changelog",source:"@site/src/pages/changelog.md"},d=[{value:"RatOS V1.1",id:"ratos-v11",children:[{value:"KlipperScreen",id:"klipperscreen",children:[],level:3},{value:"General",id:"general",children:[],level:3},{value:"Updating from RatOS V1.0",id:"updating-from-ratos-v10",children:[{value:"Sensorless homing",id:"sensorless-homing",children:[],level:4},{value:"Stepper Motors",id:"stepper-motors",children:[],level:4},{value:"New Templates (Optional)",id:"new-templates-optional",children:[],level:4}],level:3}],level:2},{value:"RatOS V1.0",id:"ratos-v10",children:[{value:"Updating from V-CoreOS-RC2",id:"updating-from-v-coreos-rc2",children:[],level:3},{value:"General",id:"general-1",children:[],level:3},{value:"Printers",id:"printers",children:[],level:3},{value:"Boards",id:"boards",children:[],level:3},{value:"Macros",id:"macros",children:[],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"changelog"},"Changelog"),(0,o.kt)("h2",{id:"ratos-v11"},"RatOS V1.1"),(0,o.kt)("p",null,"This release mainly revolves around the new stepper/stepper driver setting recommendations from Klipper. ",(0,o.kt)("inlineCode",{parentName:"p"},"hold_current")," has been removed, stealthchop is now entirely disabled by default, interpolation has been disabled and microsteps have been increased to 64 to counteract the additional noise. V-Minion template has now been optimized for the final hardware in the release kit. Keep reading to see the complete list of changes."),(0,o.kt)("h3",{id:"klipperscreen"},"KlipperScreen"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"KlipperScreen now correctly installed as Pi user. This makes KlipperScreen.conf (next to your printer.cfg) work again. ",(0,o.kt)("strong",{parentName:"li"},"This change requires flashing RatOS V1.1 to your Pi."))),(0,o.kt)("h3",{id:"general"},"General"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stepper motors, drivers and speed limits have now been made more modular, allowing for easier configuration of, for example, 48V steppers. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/configuration/advanced-stepper-configuration"},"Advanced Stepper Configuration")," for more information."),(0,o.kt)("li",{parentName:"ul"},"Driver / Stepper settings now adopt the new recommended klipper defaults. This also means that your steppers might make a bit more noise than they did before, since the stealthchop_threshold has been set to 0. You can manually set stealthchop_threshold back to 1 if that's unacceptable to you, just be aware that it will reduce the stepper's positional accuracy."),(0,o.kt)("li",{parentName:"ul"},"Rapido and Dragonfly configs added."),(0,o.kt)("li",{parentName:"ul"},"LGX Lite config added."),(0,o.kt)("li",{parentName:"ul"},"Printer templates have been improved for better organization and now includes the new stepper configurations."),(0,o.kt)("li",{parentName:"ul"},"SKR2 Documentation added"),(0,o.kt)("li",{parentName:"ul"},"V-Minion printer template optimized for the release of V-Minion full kit.")),(0,o.kt)("h3",{id:"updating-from-ratos-v10"},"Updating from RatOS V1.0"),(0,o.kt)("p",null,"Generally you don't have to do anything to use RatOS v1.1, unless you use sensorless homing."),(0,o.kt)("h4",{id:"sensorless-homing"},"Sensorless homing"),(0,o.kt)("p",null,"If you are using sensorless homing, you'll now need to remove the HOLDCURRENT parameters from you SET_TMC_CURRENT commands. This has no effect on functionality, it didn't do anything useful before. However, if you include the new stepper configs you may have to retune your currents and sensitivity settings."),(0,o.kt)("h4",{id:"stepper-motors"},"Stepper Motors"),(0,o.kt)("p",null,"On V-Core 3 and V-Core Pro printers using the stock 48mm steppers on all axes add ",(0,o.kt)("inlineCode",{parentName:"p"},"[include config/steppers/ldo/42sth48-2504ac/2209/24v-1.6a-*.cfg]")," (cooled drivers) or ",(0,o.kt)("inlineCode",{parentName:"p"},"[include config/steppers/ldo/42sth48-2504ac/2209/24v-1.1a-*.cfg]")," (uncooled drivers) to your USER OVERRIDES section. You can skip this step if you're migrating your printer.cfg (see below).\nIf you only use the stock steppers on some axes, or want different currents, voltages etc you can include the stepper config for specific steppers like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"[include config/steppers/ldo/42sth48-2504ac/2209/24v-1.6a-x.cfg]\n[include config/steppers/ldo/42sth48-2504ac/2209/24v-1.6a-y.cfg]\n[include config/steppers/ldo/42sth48-2504ac/2209/24v-1.1a-z.cfg]\n[include config/steppers/ldo/42sth48-2504ac/2209/24v-1.1a-z1.cfg]\n[include config/steppers/ldo/42sth48-2504ac/2209/24v-1.1a-z2.cfg]\n")),(0,o.kt)("p",null,"These stepper specific configs have their DRIVER","_","*"," settings tuned for the given driver, voltage and amperage. Take a look in the config/steppers folders to see which options are available."),(0,o.kt)("p",null,"If you want to go back to the way it was in v1.0 (stealthchop_threshold: 1) simply add this to your user overrides section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"[tmc2209 stepper_x]\nstealthchop_threshold: 1\ninterpolate: True\n\n[tmc2209 stepper_y]\nstealthchop_threshold: 1\ninterpolate: True\n\n[tmc2209 extruder]\ninterpolate: True\nstealthchop_threshold: 1\n\n[tmc2209 stepper_z]\ninterpolate: True\nstealthchop_threshold: 1\n\n[tmc2209 stepper_z1]\ninterpolate: True\nstealthchop_threshold: 1\n\n[tmc2209 stepper_z2]\ninterpolate: True\nstealthchop_threshold: 1\n")),(0,o.kt)("p",null,"Be aware that this comes with disadvantage of less precise motion, and it will not work at all with Fysetc and Mellow drivers."),(0,o.kt)("h4",{id:"new-templates-optional"},"New Templates (Optional)"),(0,o.kt)("p",null,"RatOS v1.1 comes with new improved and reorganized templates. If you want the new templates but don't want to reflash your Pi, you can migrate manually. To do so, start by making a backup of your printer.cfg (download it, and put it somewhere safe), then replace printer.cfg with the contents of config/templates/","[","your-printer","]","-printer.template.cfg. Go through your new printer.cfg and use your old config as a reference for the values you need. You can copy / paste the klipper config block at the bottom to your new printer.cfg to retain all the settings you've saved via ",(0,o.kt)("inlineCode",{parentName:"p"},"SAVE_CONFIG"),"."),(0,o.kt)("h2",{id:"ratos-v10"},"RatOS V1.0"),(0,o.kt)("h3",{id:"updating-from-v-coreos-rc2"},"Updating from V-CoreOS-RC2"),(0,o.kt)("p",null,"Updating to RatOS v1.0 requires you to flash the SD Card in your Raspberry Pi, as well as your control board following the usual steps (has to be done manually via SD card transfer) found in the ",(0,o.kt)("a",{parentName:"p",href:"docs/installation"},"Installation Section"),". That also means that any changes you've made to your Raspberry Pi setup will be lost unless you make a backup first. If you want to be absolutely sure you don't loose something, you can use a new SD card for RatOS v1.0. These are common things you'll probably want to backup:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"printer.cfg (you can download this from Fluidd)"),(0,o.kt)("li",{parentName:"ul"},".moonraker_database/","*"," (located in /home/pi/.moonraker_database on your Raspberry Pi. Download data.mdb and lock.mdb with SCP/WinSCP then upload them to that same location after installation of RatOS v1.0)"),(0,o.kt)("li",{parentName:"ul"},"Any custom setup you've done, that isn't replaced with native RatOS functionality.")),(0,o.kt)("p",null,"If you're reuploading your printer.cfg from V-CoreOS-RC2 you can (optionally) add this to the bottom of printer.cfg (right above the ### USER OVERRIDES section):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},'### MACRO CONFIGURATION\n[gcode_macro RatOS]\n# Use relative extrusion mode\n# Set to False to use absolute extrusion mode\nvariable_relative_extrusion: True\n# Wait for extruder to reach 150 so an inductive probe (if present) is at a predictable temp.\n# Also allows the bed heat to spread a little, and softens any plastic that might be stuck to the nozzle.\n# Set to False to disable\nvariable_preheat_extruder: True\n# Calibrate the bed mesh in the START_PRINT macro.\n# Set to false to skip BED_MESH_CALIBRATE, it will still load the BED_MESH\n# with the name "ratos", be sure to save your bed_mesh profile with that name.\n# or override the _START_PRINT_BED_MESH macro to implement your own mesh handling logic.\nvariable_calibrate_bed_mesh: True\n# Print a prime line at the end of the START_PRINT macro\n# set to False to disable nozzle_priming.\nvariable_nozzle_priming: "primeline"\n# Park in the back when waiting for the extruder to heat up\n# set to "front" to park in the front, or "center" to park in the center.\nvariable_start_print_park_in: "back"\n# Height to park it when waiting for extruder to heat.\nvariable_start_print_park_z_height: 50\n# Skew profile to load before starting the print\n# uncomment this to use your calibrated skew correction profile.\n#variable_skew_profile: "my_skew_profile"\n# Park in the back after the print has ended or was cancelled.\n# set to "front" to park in the front, or "center" to park in the center.\nvariable_end_print_park_in: "back"\n# Park in the back when the print is paused.\n# set to "front" to park in the front, or "center" to park in the center.\nvariable_pause_print_park_in: "back"\n# Set the speed for travel moves in RatOS Macros in mm/s.\nvariable_macro_travel_speed: 150\n')),(0,o.kt)("p",null,"If the section is not present in your printer.cfg the default values will be used. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration/macros"},"Macro Configuration")," for information on how to use the variables."),(0,o.kt)("h3",{id:"general-1"},"General"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Since the future of Fluidd is uncertain, RatOS has migrated to Mainsail."),(0,o.kt)("li",{parentName:"ul"},"KlipperScreen now comes preinstalled."),(0,o.kt)("li",{parentName:"ul"},"Picking your printer is now done via Macros on first startup.")),(0,o.kt)("h3",{id:"printers"},"Printers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add V-Core Pro 1.3 support")),(0,o.kt)("h3",{id:"boards"},"Boards"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Firmware compilation has been automated! Firmware compilation and flashing is now attempted when the klipper repository is updated."),(0,o.kt)("li",{parentName:"ul"},"Fysetc Spider v1.1 support added"),(0,o.kt)("li",{parentName:"ul"},"SKR 2 /w STM32F429 support added"),(0,o.kt)("li",{parentName:"ul"},"Udev symlinks are now automatically updated when the ratos config is updated. That means new boards are mapped automatically."),(0,o.kt)("li",{parentName:"ul"},"RPi MCU added (automatically updated with klipper)"),(0,o.kt)("li",{parentName:"ul"},"make-and-flash-mcu.sh now copies the firmware binary into a firmware_binaries folder browsable in mainsail for manual flashing via SD Card if needed.")),(0,o.kt)("h3",{id:"macros"},"Macros"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"gcode_shell_command.py has been added."),(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("inlineCode",{parentName:"li"},"INSTALL_VCORE_THREE_CONFIG"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"INSTALL_VCORE_PRO_CONFIG"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"INSTALL_VMINION_CONFIG")," macro's for initial setup."),(0,o.kt)("li",{parentName:"ul"},"Added COMPILE_BINARIES macro to compile binaries for all supported boards in case the user got himself into a bad situation and needs the newest firmware."),(0,o.kt)("li",{parentName:"ul"},"Added GENERATE_SHAPER_GRAPHS which runs resonance test and generates graphs which are placed in the ",(0,o.kt)("inlineCode",{parentName:"li"},"input_shaper")," folder."),(0,o.kt)("li",{parentName:"ul"},"Macro's now have configurable behavior, the following variables are available: ",(0,o.kt)("inlineCode",{parentName:"li"},"relative_extrusion"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"preheat_extruder"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"calibrate_bed_mesh"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"nozzle_priming"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"start_print_park_in"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"start_print_park_z_height"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"end_print_park_in"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"pause_print_park_in")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"macro_travel_speed"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"START_PRINT")," now has 4 hooks: ",(0,o.kt)("inlineCode",{parentName:"li"},"_START_PRINT_AFTER_HEATING_BED"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"_START_PRINT_BED_MESH"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"_START_PRINT_PARK")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"_START_PRINT_AFTER_HEATING_EXTRUDER"),". You can override these in your printer.cfg to further customize the way your ",(0,o.kt)("inlineCode",{parentName:"li"},"START_PRINT")," macro behaves."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"END_PRINT")," now has 2 hooks: ",(0,o.kt)("inlineCode",{parentName:"li"},"_END_PRINT_AFTER_HEATERS_OFF")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"_END_PRINT_PARK"),". You can override these in your printer.cfg to further customize the way your END_PRINT macro behaves."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"END_PRINT")," and PAUSE now moves to a safe Z distance instead of always moving the same distance which could lead to errors."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"M600")," is now supported.")))}u.isMDXComponent=!0}}]);