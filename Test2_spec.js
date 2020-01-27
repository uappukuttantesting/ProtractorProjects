"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Test2_Class_1 = require("../PageClass/Test2_Class");
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info';
describe("Add to Basket", () => {
let obj2 = new Test2_Class_2.Test2_Class();
    it("Add to basket and select standard fare", () => __awaiter(this, void 0, void 0, function* () {
        yield obj2.timeSlot.click();
	protractor_1.browser.sleep(2000);
        yield obj2.continuebtn.click();
	protractor_1.browser.sleep(2000);
	yield obj2.continuewithstdfare.click();
	protractor_1.browser.sleep(2000);
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdDJfc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BPTV9UZXN0U3BlYy9UZXN0Ml9zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0c7QUFFaEcsMERBQXVEO0FBR3ZELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7QUFFdEIsUUFBUSxDQUFDLDBCQUEwQixFQUFFLEdBQUcsRUFBRTtJQUN0QyxJQUFJLElBQUksR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztJQUU3QixJQUFJLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDO0lBQ2pDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUVkLFNBQWUsV0FBVyxDQUFDLE9BQU87O1lBRTlCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7Z0JBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtvQkFFeEUsSUFBSSxJQUFJLElBQUksT0FBTyxFQUFFO3dCQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO3FCQUNoRTtnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUVQLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0lBRUQsU0FBZSxhQUFhLENBQUMsUUFBUTs7WUFDakMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFF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