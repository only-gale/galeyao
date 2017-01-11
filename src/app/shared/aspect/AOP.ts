import { AOPEvent } from "./AOPEvent";
/**
 * Created by gale on 17-1-11.
 *
 * Simple AOP.
 */
export class AOP {
    // Will fire before the target is called
    static before( target: Function, method: string, action: Function ): void {
        let old = target.prototype[ method ];
        let event = new AOPEvent('before', method);

        target.prototype[ method ] = function () {
            let args = Array.prototype.slice.call(arguments);
            action.apply(this, [ event, args ]);
            return old.apply(this, args);
        }
    }

    // Will fire after the target is called successfully
    static after( target: Function, method: string, action: Function ): void {
        let old = target.prototype[ method ];
        let event = new AOPEvent('after', method);

        target.prototype[ method ] = function () {
            let args = Array.prototype.slice.call(arguments);
            let result = old.apply(this, args);
            action.apply(this, [ event, args ]);
            return result;
        }
    }

    // Will fire after the target is called, whether the call was successful or not
    static afterAll( target: Function, method: string, action: Function ): void {
        let old = target.prototype[ method ];
        let event = new AOPEvent('afterAll', method);

        target.prototype[ method ] = function () {
            let args = Array.prototype.slice.call(arguments);
            try {
                return old.apply(this, args);
            } finally {
                action.apply(this, [ event, args ]);
            }
        }
    }

    // Will fire if the target fails
    static error( target: Function, method: string, action: Function ): void {
        let old = target.prototype[ method ];

        target.prototype[ method ] = function () {
            let args = Array.prototype.slice.call(arguments);
            try {
                return old.apply(this, args);
            } catch ( ex ) {
                let event = new AOPEvent('error', method, ex);
                action.apply(this, [ event, args ]);
                throw ex;
            }
        }
    }
}
