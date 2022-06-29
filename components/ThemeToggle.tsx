import { Switch, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { MoonIcon } from './icons/MoonIcon';
import { SunIcon } from './icons/SunIcon';
export const ThemeToggle = () => {
    const { setTheme } = useNextTheme();
    const { isDark } = useTheme();

    return (
        <div>
            <Switch
                checked={isDark}
                onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                size="xl"
                iconOn={<SunIcon filled />}
                iconOff={<MoonIcon filled />}
            />
        </div>
    )
}
