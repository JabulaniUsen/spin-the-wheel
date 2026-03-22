(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/spin-wheel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpinWheel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const COLORS = [
    {
        name: "Red",
        hex: "#ff4757",
        label: "🔴",
        startAngle: 0,
        endAngle: 120
    },
    {
        name: "Blue",
        hex: "#3366ff",
        label: "🔵",
        startAngle: 120,
        endAngle: 240
    },
    {
        name: "Green",
        hex: "#2ed573",
        label: "🟢",
        startAngle: 240,
        endAngle: 360
    }
];
// Random spin durations in milliseconds (for variety)
const SPIN_DURATIONS = [
    7000,
    10000,
    12000,
    20000
] // 7s, 10s, 12s, 20s
;
// Helper function to get random spin duration
const getRandomSpinDuration = ()=>{
    return SPIN_DURATIONS[Math.floor(Math.random() * SPIN_DURATIONS.length)];
};
const SECTIONS_COUNT = COLORS.length;
const DEGREES_PER_SECTION = 360 / SECTIONS_COUNT // 120 degrees per section
;
// Helper function to convert angle to SVG coordinates
const angleToPoint = (angleDeg, centerX, centerY, radius)=>{
    const angleRad = (angleDeg - 90) * Math.PI / 180 // Convert to radians and adjust for SVG coordinate system (0° is at top)
    ;
    const x = centerX + radius * Math.cos(angleRad);
    const y = centerY + radius * Math.sin(angleRad);
    return {
        x,
        y
    };
};
// LocalStorage key prefix for storing spun users
const STORAGE_KEY_PREFIX = 'spin-wheel-user-';
function SpinWheel({ onSpinComplete, lastSpin, onCheckName }) {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSpinning, setIsSpinning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedColor, setSelectedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasSpun, setHasSpun] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isChecking, setIsChecking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [spinDuration, setSpinDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(7000) // Default duration
    ;
    // Restore name and spin state from localStorage on mount (for page refresh)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpinWheel.useEffect": ()=>{
            // Check for saved spins
            const savedSpins = localStorage.getItem(`${STORAGE_KEY_PREFIX}all`);
            if (savedSpins) {
                try {
                    const spins = JSON.parse(savedSpins);
                    if (spins.length > 0) {
                        // Get the most recent spin (last entry in array)
                        const mostRecentSpin = spins[spins.length - 1];
                        // Restore the name to the input field
                        setName(mostRecentSpin.name);
                    // Restore the spin state - will be set by the next useEffect when name is set
                    }
                } catch (err) {
                    console.error('Error reading from localStorage on mount:', err);
                }
            }
        }
    }["SpinWheel.useEffect"], []); // Only run on mount
    // Restore spin state when name matches a saved spin (with debounce)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpinWheel.useEffect": ()=>{
            // Wait for name to be entered
            if (!name.trim()) {
                setHasSpun(false);
                setSelectedColor(null);
                return;
            }
            // Wait 2 seconds after user stops typing before checking
            const timeoutId = setTimeout({
                "SpinWheel.useEffect.timeoutId": ()=>{
                    const savedSpins = localStorage.getItem(`${STORAGE_KEY_PREFIX}all`);
                    if (savedSpins) {
                        try {
                            const spins = JSON.parse(savedSpins);
                            const matchingSpin = spins.find({
                                "SpinWheel.useEffect.timeoutId.matchingSpin": (spin)=>spin.name.toLowerCase().trim() === name.toLowerCase().trim()
                            }["SpinWheel.useEffect.timeoutId.matchingSpin"]);
                            if (matchingSpin) {
                                setHasSpun(true);
                                setSelectedColor(matchingSpin.color);
                            } else {
                                // If name doesn't match, reset spin state
                                setHasSpun(false);
                                setSelectedColor(null);
                            }
                        } catch (err) {
                            console.error('Error reading from localStorage:', err);
                        }
                    } else {
                        setHasSpun(false);
                        setSelectedColor(null);
                    }
                }
            }["SpinWheel.useEffect.timeoutId"], 1500) // Wait 1.5 seconds after typing stops
            ;
            return ({
                "SpinWheel.useEffect": ()=>clearTimeout(timeoutId)
            })["SpinWheel.useEffect"];
        }
    }["SpinWheel.useEffect"], [
        name
    ]);
    // Check if current name has already spun (both localStorage and database)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpinWheel.useEffect": ()=>{
            const checkExistingSpin = {
                "SpinWheel.useEffect.checkExistingSpin": async ()=>{
                    if (!name.trim()) {
                        setHasSpun(false);
                        return;
                    }
                    setIsChecking(true);
                    setError(null);
                    // First check localStorage for immediate feedback
                    const savedSpins = localStorage.getItem(`${STORAGE_KEY_PREFIX}all`);
                    if (savedSpins) {
                        try {
                            const spins = JSON.parse(savedSpins);
                            const hasSpunLocally = spins.some({
                                "SpinWheel.useEffect.checkExistingSpin.hasSpunLocally": (spin)=>spin.name.toLowerCase().trim() === name.toLowerCase().trim()
                            }["SpinWheel.useEffect.checkExistingSpin.hasSpunLocally"]);
                            if (hasSpunLocally) {
                                setHasSpun(true);
                                setIsChecking(false);
                                return;
                            }
                        } catch (err) {
                            console.error('Error reading from localStorage:', err);
                        }
                    }
                    // Then check database (authoritative source)
                    if (onCheckName) {
                        try {
                            const exists = await onCheckName(name.trim());
                            if (exists) {
                                setHasSpun(true);
                            } else {
                                setHasSpun(false);
                            }
                        } catch (err) {
                            console.error('Error checking name:', err);
                        // Don't show error for check failures, just allow user to proceed
                        }
                    }
                    setIsChecking(false);
                }
            }["SpinWheel.useEffect.checkExistingSpin"];
            // Debounce the check - wait 1.5 seconds after user stops typing
            const timeoutId = setTimeout(checkExistingSpin, 1500);
            return ({
                "SpinWheel.useEffect": ()=>clearTimeout(timeoutId)
            })["SpinWheel.useEffect"];
        }
    }["SpinWheel.useEffect"], [
        name,
        onCheckName
    ]);
    const handleSpin = async ()=>{
        if (!name.trim()) {
            setError("Please enter your name!");
            return;
        }
        if (hasSpun) {
            setError("You can only spin once! 🎡");
            return;
        }
        if (isSpinning || isSaving) return;
        setError(null);
        setIsSpinning(true);
        setSelectedColor(null);
        // Get random spin duration for this spin
        const currentSpinDuration = getRandomSpinDuration();
        setSpinDuration(currentSpinDuration);
        // Add multiple spins for dramatic effect - vary spins based on duration
        // Longer durations get more spins for visual consistency
        const minSpins = currentSpinDuration <= 7000 ? 5 : currentSpinDuration <= 10000 ? 7 : currentSpinDuration <= 12000 ? 9 : 12;
        const maxSpins = currentSpinDuration <= 7000 ? 10 : currentSpinDuration <= 10000 ? 15 : currentSpinDuration <= 12000 ? 18 : 25;
        const randomSpins = Math.floor(Math.random() * (maxSpins - minSpins + 1)) + minSpins;
        // Randomly select a color FIRST (equal probability for each)
        const randomColorIndex = Math.floor(Math.random() * COLORS.length);
        const selectedColorObj = COLORS[randomColorIndex];
        // Get the target section for this color
        // Each color spans 120 degrees, we want to land somewhere in the middle section
        // Add some randomness within the section for more natural results
        const sectionStart = selectedColorObj.startAngle;
        const sectionEnd = selectedColorObj.endAngle;
        const sectionSize = sectionEnd - sectionStart // 120 degrees
        ;
        // Random position within the section (40% to 60% through the section for more central landing)
        const randomOffset = 0.4 + Math.random() * 0.2 // 0.4 to 0.6
        ;
        const targetAngle = sectionStart + sectionSize * randomOffset;
        // Calculate rotation needed to bring this angle to the pointer (0°)
        // The pointer is fixed at the top (0°)
        // When the wheel rotates clockwise by R degrees:
        // - The color that was at position (360 - R) mod 360 ends up at the pointer (0°)
        // So to bring targetAngle to the pointer, we need: (360 - finalRotation) mod 360 = targetAngle
        // Which means: finalRotation = (360 - targetAngle) mod 360
        //
        // But we have current rotation, so:
        // finalRotation = currentRotation + targetRotation
        // We want: (360 - (currentRotation + targetRotation)) mod 360 = targetAngle
        // So: 360 - currentRotation - targetRotation = targetAngle (mod 360)
        // targetRotation = (360 - targetAngle - currentRotation) mod 360
        const currentRotationMod = rotation % 360;
        const baseRotationNeeded = (360 - targetAngle - currentRotationMod + 720) % 360;
        // Add full spins for dramatic effect
        const targetRotation = randomSpins * 360 + baseRotationNeeded;
        setRotation(rotation + targetRotation);
        // Wait for spin animation to complete (use the random duration)
        setTimeout(async ()=>{
            // Verify what color is actually at the pointer after rotation
            const finalRotation = (rotation + targetRotation) % 360;
            // The pointer is fixed at 0° (top)
            // When the wheel rotates clockwise by R degrees, everything rotates clockwise
            // So the color that was at position (360 - R) mod 360 is now at the pointer (0°)
            // This is because: position on wheel - rotation = pointer position (0°)
            // So: original position = rotation mod 360
            // But wait, if wheel rotates clockwise by R, color at A moves to (A + R) mod 360
            // At pointer (0°): we need the color where (A + R) mod 360 = 0
            // So: A = (360 - R) mod 360
            const actualColorAngle = (360 - finalRotation) % 360;
            // Determine which color section this angle falls into
            let actualSelectedColor;
            if (actualColorAngle < 120) {
                actualSelectedColor = COLORS[0]; // Red (0-120)
            } else if (actualColorAngle < 240) {
                actualSelectedColor = COLORS[1]; // Blue (120-240)
            } else {
                actualSelectedColor = COLORS[2]; // Green (240-360)
            }
            // Use the actually calculated color, not the randomly selected one (for debugging)
            // This ensures we save what actually lands at the pointer
            const selectedColorName = actualSelectedColor.name;
            setSelectedColor(selectedColorName);
            // Log for debugging
            console.log(`🎲 Randomly selected color: ${selectedColorObj.name}`);
            console.log(`📐 Target section: ${sectionStart}° - ${sectionEnd}°`);
            console.log(`🎯 Target angle: ${targetAngle.toFixed(2)}°`);
            console.log(`🔄 Final rotation: ${finalRotation.toFixed(2)}°`);
            console.log(`📍 Actual color at pointer: ${actualColorAngle.toFixed(2)}° = ${actualSelectedColor.name}`);
            console.log(`💾 Saving color: ${selectedColorName}`);
            if (selectedColorObj.name !== actualSelectedColor.name) {
                console.warn(`⚠️ WARNING: Randomly selected ${selectedColorObj.name} but ${actualSelectedColor.name} is at pointer!`);
            }
            // Save to Supabase via callback
            setIsSaving(true);
            try {
                await onSpinComplete(name.trim(), selectedColorName);
                // Save to localStorage so it persists after refresh
                const savedSpins = localStorage.getItem(`${STORAGE_KEY_PREFIX}all`);
                let spins = savedSpins ? JSON.parse(savedSpins) : [];
                // Remove any existing entry for this name (case-insensitive)
                spins = spins.filter((spin)=>spin.name.toLowerCase().trim() !== name.toLowerCase().trim());
                // Add new spin result
                spins.push({
                    name: name.trim(),
                    color: selectedColorName,
                    timestamp: new Date().toISOString()
                });
                // Save back to localStorage
                localStorage.setItem(`${STORAGE_KEY_PREFIX}all`, JSON.stringify(spins));
                // Also save individual entry for quick lookup
                localStorage.setItem(`${STORAGE_KEY_PREFIX}${name.toLowerCase().trim()}`, JSON.stringify({
                    name: name.trim(),
                    color: selectedColorName
                }));
                setHasSpun(true);
                setError(null);
                console.log('✅ Spin saved to localStorage and database');
            } catch (err) {
                console.error('Error saving spin:', err);
                setError("Failed to save your spin. Please try again.");
                setSelectedColor(null);
                setHasSpun(false);
            } finally{
                setIsSpinning(false);
                setIsSaving(false);
            }
        }, currentSpinDuration);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-6 sm:gap-8 w-full max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] animate-bounce-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 sm:-translate-y-3 z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-0 h-0 border-l-[10px] sm:border-l-[12px] border-r-[10px] sm:border-r-[12px] border-t-[14px] sm:border-t-[18px] border-l-transparent border-r-transparent border-t-primary drop-shadow-lg"
                        }, void 0, false, {
                            fileName: "[project]/components/spin-wheel.tsx",
                            lineNumber: 319,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/spin-wheel.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 300 300",
                        className: "transform transition-transform",
                        style: {
                            transform: `rotate(${rotation}deg)`,
                            transitionDuration: isSpinning ? `${spinDuration}ms` : "0s",
                            transitionTimingFunction: isSpinning ? "cubic-bezier(0.25, 0.1, 0.25, 1)" : "linear",
                            filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.3))"
                        },
                        children: [
                            COLORS.map((color, index)=>{
                                const centerX = 150;
                                const centerY = 150;
                                const radius = 100;
                                // Calculate start and end points for this section
                                const startPoint = angleToPoint(color.startAngle, centerX, centerY, radius);
                                const endPoint = angleToPoint(color.endAngle, centerX, centerY, radius);
                                // Large arc flag (1 if arc spans more than 180 degrees, 0 otherwise)
                                // For 120-degree sections, we use large-arc-flag = 0
                                const largeArcFlag = 0;
                                // Create the path for this section
                                const path = `M ${centerX} ${centerY} L ${startPoint.x} ${startPoint.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endPoint.x} ${endPoint.y} Z`;
                                // Calculate label position (middle of the section)
                                const labelAngle = (color.startAngle + color.endAngle) / 2;
                                const labelRadius = radius * 0.65 // Position label closer to center
                                ;
                                const labelPoint = angleToPoint(labelAngle, centerX, centerY, labelRadius);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: path,
                                            fill: color.hex,
                                            stroke: "white",
                                            strokeWidth: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/spin-wheel.tsx",
                                            lineNumber: 358,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: labelPoint.x,
                                            y: labelPoint.y,
                                            fontSize: "20",
                                            fontWeight: "bold",
                                            fill: "white",
                                            textAnchor: "middle",
                                            dominantBaseline: "middle",
                                            fontFamily: "Poppins",
                                            className: "select-none",
                                            children: color.name.toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/components/spin-wheel.tsx",
                                            lineNumber: 364,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, color.name, true, {
                                    fileName: "[project]/components/spin-wheel.tsx",
                                    lineNumber: 357,
                                    columnNumber: 15
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "150",
                                cy: "150",
                                r: "40",
                                fill: "white",
                                stroke: "#ff6b9d",
                                strokeWidth: "4"
                            }, void 0, false, {
                                fileName: "[project]/components/spin-wheel.tsx",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "150",
                                y: "158",
                                fontSize: "20",
                                fontWeight: "bold",
                                fill: "#ff6b9d",
                                textAnchor: "middle",
                                fontFamily: "Poppins",
                                className: "select-none",
                                children: "SPIN"
                            }, void 0, false, {
                                fileName: "[project]/components/spin-wheel.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/spin-wheel.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/spin-wheel.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col gap-3 sm:gap-4 px-4 sm:px-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "name",
                                className: "font-heading text-base sm:text-lg text-primary font-semibold",
                                children: "Your Name"
                            }, void 0, false, {
                                fileName: "[project]/components/spin-wheel.tsx",
                                lineNumber: 391,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "name",
                                type: "text",
                                value: name,
                                onChange: (e)=>setName(e.target.value),
                                onKeyPress: (e)=>e.key === "Enter" && !hasSpun && handleSpin(),
                                placeholder: "Enter your name...",
                                className: "px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-accent bg-white text-foreground placeholder-foreground/40 font-body text-base sm:text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed",
                                disabled: isSpinning || hasSpun || isChecking || isSaving
                            }, void 0, false, {
                                fileName: "[project]/components/spin-wheel.tsx",
                                lineNumber: 394,
                                columnNumber: 11
                            }, this),
                            isChecking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-foreground/60 font-body",
                                children: "Checking..."
                            }, void 0, false, {
                                fileName: "[project]/components/spin-wheel.tsx",
                                lineNumber: 404,
                                columnNumber: 26
                            }, this),
                            hasSpun && !isChecking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-primary font-body font-semibold",
                                children: "✓ You've spun! Results below."
                            }, void 0, false, {
                                fileName: "[project]/components/spin-wheel.tsx",
                                lineNumber: 405,
                                columnNumber: 38
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-red-600 font-body font-semibold",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/components/spin-wheel.tsx",
                                lineNumber: 406,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/spin-wheel.tsx",
                        lineNumber: 390,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleSpin,
                        disabled: isSpinning || hasSpun,
                        className: "w-full bg-primary hover:bg-pink-600 text-white font-heading text-base sm:text-lg py-5 sm:py-6 rounded-xl transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                        children: isSaving ? "💾 SAVING..." : isSpinning ? "🎡 SPINNING..." : hasSpun ? "✓ ALREADY SPUN" : "🎉 SPIN NOW"
                    }, void 0, false, {
                        fileName: "[project]/components/spin-wheel.tsx",
                        lineNumber: 409,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/spin-wheel.tsx",
                lineNumber: 389,
                columnNumber: 7
            }, this),
            selectedColor && lastSpin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full mt-4 sm:mt-6 p-4 sm:p-6 bg-white rounded-2xl border-3 border-primary shadow-lg animate-bounce-in mx-4 sm:mx-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body text-sm text-foreground/60 mb-2",
                            children: "🎊 Amazing! 🎊"
                        }, void 0, false, {
                            fileName: "[project]/components/spin-wheel.tsx",
                            lineNumber: 422,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-heading text-xl sm:text-2xl text-primary mb-2 font-bold",
                            children: lastSpin.name
                        }, void 0, false, {
                            fileName: "[project]/components/spin-wheel.tsx",
                            lineNumber: 423,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-heading text-2xl sm:text-3xl mb-3 font-bold",
                            children: [
                                selectedColor === "Red" && "🔴 RED",
                                selectedColor === "Blue" && "🔵 BLUE",
                                selectedColor === "Green" && "🟢 GREEN"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/spin-wheel.tsx",
                            lineNumber: 424,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body text-foreground/70 text-sm sm:text-base",
                            children: "Congratulations! You're expected to represent this color at the picnic."
                        }, void 0, false, {
                            fileName: "[project]/components/spin-wheel.tsx",
                            lineNumber: 429,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/spin-wheel.tsx",
                    lineNumber: 421,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/spin-wheel.tsx",
                lineNumber: 420,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/spin-wheel.tsx",
        lineNumber: 315,
        columnNumber: 5
    }, this);
}
_s(SpinWheel, "2waUhF3ldYdk+SogPsYU1mEBOTQ=");
_c = SpinWheel;
var _c;
__turbopack_context__.k.register(_c, "SpinWheel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/wheel-stats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WheelStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function WheelStats({ participants, loading = false }) {
    const redCount = participants.filter((p)=>p.color === "Red").length;
    const blueCount = participants.filter((p)=>p.color === "Blue").length;
    const greenCount = participants.filter((p)=>p.color === "Green").length;
    const stats = [
        {
            color: "Red",
            count: redCount,
            hex: "#ff4757",
            emoji: "🔴"
        },
        {
            color: "Blue",
            count: blueCount,
            hex: "#3366ff",
            emoji: "🔵"
        },
        {
            color: "Green",
            count: greenCount,
            hex: "#2ed573",
            emoji: "🟢"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-slide-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-heading text-2xl sm:text-3xl text-primary mb-2",
                        children: "📊 Leaderboard"
                    }, void 0, false, {
                        fileName: "[project]/components/wheel-stats.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body text-foreground/60",
                        children: [
                            "Total spins: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-primary",
                                children: participants.length
                            }, void 0, false, {
                                fileName: "[project]/components/wheel-stats.tsx",
                                lineNumber: 25,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/wheel-stats.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/wheel-stats.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4",
                children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 rounded-xl bg-white border-2 shadow-md hover:shadow-lg transition-all transform hover:scale-105 animate-slide-up",
                        style: {
                            borderColor: stat.hex,
                            animationDelay: `${index * 0.1}s`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl",
                                                children: stat.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/components/wheel-stats.tsx",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-heading text-lg text-foreground",
                                                children: stat.color
                                            }, void 0, false, {
                                                fileName: "[project]/components/wheel-stats.tsx",
                                                lineNumber: 43,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/wheel-stats.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-heading text-3xl text-foreground/20",
                                        children: stat.count
                                    }, void 0, false, {
                                        fileName: "[project]/components/wheel-stats.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/wheel-stats.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-gray-200 rounded-full h-3 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full rounded-full transition-all duration-500",
                                    style: {
                                        width: `${participants.length > 0 ? stat.count / participants.length * 100 : 0}%`,
                                        backgroundColor: stat.hex
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/wheel-stats.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/wheel-stats.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        ]
                    }, stat.color, true, {
                        fileName: "[project]/components/wheel-stats.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/wheel-stats.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            participants.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 animate-slide-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-heading text-lg text-primary mb-4",
                        children: "👥 All Participants"
                    }, void 0, false, {
                        fileName: "[project]/components/wheel-stats.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl p-4 max-h-96 overflow-y-auto border-2 border-accent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: participants.map((participant, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-heading text-lg",
                                            children: [
                                                participant.color === "Red" && "🔴",
                                                participant.color === "Blue" && "🔵",
                                                participant.color === "Green" && "🟢"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/wheel-stats.tsx",
                                            lineNumber: 73,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-body text-foreground flex-1",
                                            children: participant.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/wheel-stats.tsx",
                                            lineNumber: 78,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-body text-sm text-foreground/50",
                                            children: [
                                                "#",
                                                participants.length - index
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/wheel-stats.tsx",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, participant.id || index, true, {
                                    fileName: "[project]/components/wheel-stats.tsx",
                                    lineNumber: 69,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/wheel-stats.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/wheel-stats.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/wheel-stats.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this),
            loading && participants.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 p-8 bg-white rounded-xl border-2 border-dashed border-accent text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-heading text-xl text-primary mb-2",
                        children: "⏳ Loading..."
                    }, void 0, false, {
                        fileName: "[project]/components/wheel-stats.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body text-foreground/60",
                        children: "Fetching participants data..."
                    }, void 0, false, {
                        fileName: "[project]/components/wheel-stats.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/wheel-stats.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this),
            !loading && participants.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 p-8 bg-white rounded-xl border-2 border-dashed border-accent text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-heading text-xl text-primary mb-2",
                        children: "🎪 Ready to play?"
                    }, void 0, false, {
                        fileName: "[project]/components/wheel-stats.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body text-foreground/60",
                        children: "Enter your name and start spinning to see the magic happen!"
                    }, void 0, false, {
                        fileName: "[project]/components/wheel-stats.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body text-xs text-foreground/40 mt-2",
                        children: "No participants yet. Be the first to spin!"
                    }, void 0, false, {
                        fileName: "[project]/components/wheel-stats.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/wheel-stats.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/wheel-stats.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = WheelStats;
var _c;
__turbopack_context__.k.register(_c, "WheelStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = "https://nhvdhzyctqidxdryjbrp.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzeHZwdnBteHhrcHhxcXJjaW5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMTY4NjQsImV4cCI6MjA3OTU5Mjg2NH0.b0M89sc3Y3M6sArPMP2DBcUPAnggOptWJ5PMKFQtN5A";
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: false
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/hooks/use-participants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useParticipants",
    ()=>useParticipants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useParticipants() {
    _s();
    const [participants, setParticipants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useParticipants.useEffect": ()=>{
            // Fetch initial participants
            const fetchParticipants = {
                "useParticipants.useEffect.fetchParticipants": async ()=>{
                    try {
                        setLoading(true);
                        console.log('🔄 Fetching participants from Supabase...');
                        const { data, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('participants').select('*').order('created_at', {
                            ascending: false
                        });
                        if (fetchError) {
                            console.error('❌ Supabase fetch error:', fetchError);
                            throw fetchError;
                        }
                        console.log('✅ Participants fetched:', data?.length || 0, 'participants');
                        console.log('📋 Participants data:', data);
                        setParticipants(data || []);
                        setError(null);
                    } catch (err) {
                        console.error('❌ Error fetching participants:', err);
                        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch participants';
                        setError(errorMessage);
                        // Don't block UI on error - show empty array
                        setParticipants([]);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useParticipants.useEffect.fetchParticipants"];
            fetchParticipants();
            // Subscribe to real-time changes
            console.log('🔔 Setting up real-time subscription...');
            const channel = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel('participants-changes').on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'participants'
            }, {
                "useParticipants.useEffect.channel": async (payload)=>{
                    console.log('🔔 Real-time update received:', payload.eventType);
                    // Refetch on any change
                    const { data, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('participants').select('*').order('created_at', {
                        ascending: false
                    });
                    if (!fetchError && data) {
                        console.log('✅ Participants updated via real-time:', data.length);
                        setParticipants(data);
                    } else if (fetchError) {
                        console.error('❌ Error in real-time update:', fetchError);
                    }
                }
            }["useParticipants.useEffect.channel"]).subscribe({
                "useParticipants.useEffect.channel": (status)=>{
                    console.log('📡 Subscription status:', status);
                    if (status === 'SUBSCRIBED') {
                        console.log('✅ Real-time subscription active');
                    }
                }
            }["useParticipants.useEffect.channel"]);
            return ({
                "useParticipants.useEffect": ()=>{
                    console.log('🔌 Cleaning up subscription...');
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
                }
            })["useParticipants.useEffect"];
        }
    }["useParticipants.useEffect"], []);
    return {
        participants,
        loading,
        error,
        refetch: async ()=>{
            try {
                const { data, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('participants').select('*').order('created_at', {
                    ascending: false
                });
                if (fetchError) throw fetchError;
                setParticipants(data || []);
            } catch (err) {
                console.error('Error refetching participants:', err);
            }
        }
    };
}
_s(useParticipants, "EEJExuXLR2qkuZITBvB1MCyzu50=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spin$2d$wheel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/spin-wheel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$wheel$2d$stats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/wheel-stats.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$participants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-participants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Home() {
    _s();
    const { participants, loading, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$participants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParticipants"])();
    const [lastSpin, setLastSpin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Restore last spin from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const savedSpins = localStorage.getItem('spin-wheel-user-all');
            if (savedSpins) {
                try {
                    const spins = JSON.parse(savedSpins);
                    // Get the most recent spin (last in array)
                    if (spins.length > 0) {
                        const mostRecent = spins[spins.length - 1];
                        setLastSpin({
                            name: mostRecent.name,
                            color: mostRecent.color
                        });
                    }
                } catch (err) {
                    console.error('Error restoring last spin:', err);
                }
            }
        }
    }["Home.useEffect"], []);
    const handleSpinComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleSpinComplete]": async (name, color)=>{
            try {
                const response = await fetch("/api/participants", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        color
                    })
                });
                const result = await response.json();
                if (!response.ok) {
                    throw new Error(result.error || "Failed to save participant");
                }
                // Set last spin result immediately for display
                setLastSpin({
                    name,
                    color
                });
                // The participant is now saved to the database (publicly visible)
                // The leaderboard will update automatically via:
                // 1. Real-time subscription (instant update)
                // 2. Refetch as backup (ensures update)
                await refetch();
                // Log for debugging
                console.log(`✅ Participant saved: ${name} - ${color}`);
            } catch (error) {
                console.error("Error saving participant:", error);
                throw error // Re-throw so SpinWheel can handle it
                ;
            }
        }
    }["Home.useCallback[handleSpinComplete]"], [
        refetch
    ]);
    const checkNameExists = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[checkNameExists]": async (name)=>{
            try {
                const response = await fetch(`/api/participants/check?name=${encodeURIComponent(name)}`);
                const result = await response.json();
                if (!response.ok) {
                    return false // If check fails, allow user to proceed
                    ;
                }
                return result.exists;
            } catch (error) {
                console.error("Error checking name:", error);
                return false // On error, allow user to proceed
                ;
            }
        }
    }["Home.useCallback[checkNameExists]"], []);
    // Transform participants for the components
    const participantsForDisplay = participants.map((p)=>({
            id: p.id,
            name: p.name,
            color: p.color
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-br from-pink-100 via-yellow-50 to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4 sm:p-6 lg:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-6 sm:mb-8 animate-slide-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-1 sm:mb-2",
                        children: "RCCG YAYA'S COLOUR THEMED PICNIC"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm sm:text-base lg:text-lg text-foreground/70 font-body px-2 sm:px-0",
                        children: "Enter your name, spin once, and pick your color!"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center order-1 lg:order-1 px-2 sm:px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spin$2d$wheel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onSpinComplete: handleSpinComplete,
                            lastSpin: lastSpin,
                            onCheckName: checkNameExists
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "order-2 lg:order-2 px-4 sm:px-0",
                        children: [
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 p-4 bg-red-50 border border-red-200 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-600",
                                        children: [
                                            "⚠️ Error loading participants: ",
                                            error
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>refetch(),
                                        className: "mt-2 text-sm text-red-700 underline",
                                        children: "Try again"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$wheel$2d$stats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                participants: participantsForDisplay,
                                loading: loading
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mt-8 sm:mt-12 flex flex-col gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs sm:text-sm text-foreground/70 font-body",
                        children: "Each person spins only once"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://jabulaniusen.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-xs sm:text-sm text-primary hover:text-pink-700 font-body font-semibold transition-colors",
                        children: "Build by Jabulani Usen"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(Home, "qua5ArpooKOm0u1A5/5g9B+E3yc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$participants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParticipants"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_3fe11bc3._.js.map