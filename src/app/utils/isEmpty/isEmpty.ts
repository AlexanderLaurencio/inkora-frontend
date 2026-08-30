

export function isEmpty(value: unknown) {

    if (typeof value === "string") {
        if (!value.trim()) {
            return true
        }
    }

    if (!value) {
        return true
    }

    false
}